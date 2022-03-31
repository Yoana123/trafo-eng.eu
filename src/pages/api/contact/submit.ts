import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

// Incomming data from @/components/ContactForm.tsx
type RequestData = {
  name: string
  company: string
  phone: string
  email: string
  subject: string
  message: string
}

type ResponseData = {
  status: 'error' | 'success'
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { body, method } = req

  if (!body && method !== 'POST') {
    return res
      .status(400)
      .json({ status: 'error', message: 'You preformed a malformed request.' })
  }

  const { name, company, phone, email, subject, message }: RequestData = body

  if (
    !name.trim() ||
    !company.trim() ||
    !phone.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    return res
      .status(403)
      .json({ status: 'error', message: 'You performed a malformed request.' })
  }

  const emailBody = `Name: ${name}\r\nCompany: ${company}\r\nPhone: ${phone}\r\nEmail: ${email}\r\nSubject: ${subject}\r\nMessage: ${message}`

  const transport = createTransport({
    port: 25,
    host: process.env.SMTP_HOSTNAME,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  transport.sendMail(
    {
      to: process.env.EMAIL_ADDRESS,
      from: process.env.EMAIL_ADDRESS,
      replyTo: email,
      subject: `Inquiry: ${subject}`,
      text: emailBody,
      html: emailBody.replace(/\r\n/g, '<br />'),
    },
    (err, info) => {
      transport.close()

      if (err) {
        return res.status(500).json({ status: 'error', message: err.message })
      } else {
        return res
          .status(200)
          .json({ status: 'success', message: info.response })
      }
    }
  )

  return res.status(200).json({
    status: 'success',
    message: 'Email message has been sent successful.',
  })
}
