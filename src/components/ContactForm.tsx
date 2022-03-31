import React from 'react'

import useTranslation from '../hooks/useTranslation'
import { useModal } from './ModalContext'

function ContactForm(): React.ReactElement {
  const { t } = useTranslation()

  // Modal
  const [, setModal] = useModal()

  // Form state
  const [name, setName] = React.useState<string>('')
  const [company, setCompany] = React.useState<string>('')
  const [phone, setPhone] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [subject, setSubject] = React.useState<string>('')
  const [message, setMessage] = React.useState<string>('')
  const [formError, setFormError] = React.useState<Record<string, string>>()

  const handleFormSubmit = (e: React.FormEvent): void => {
    // stop form from submit
    e.preventDefault()

    const errors: Record<string, string> = {}

    if (name.trim().length < 5) {
      errors.name = t('contacts.error.required', 'Field is required.')
    }

    if (company.trim().length < 5) {
      errors.company = t('contacts.error.required', 'Field is required.')
    }

    if (phone.trim().length < 5) {
      errors.phone = t('contacts.error.required', 'Field is required.')
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = t(
        'contacts.error.email',
        'Please enter a valid email address.'
      )
    }

    if (subject.trim().length < 5) {
      errors.subject = t('contacts.error.required', 'Field is required.')
    }

    if (message.trim().length < 10) {
      errors.message = t('contacts.error.required', 'Field is required.')
    }

    if (Object.keys(errors).length !== 0) {
      setFormError(errors)
      return
    }

    fetch('/api/contact/submit', {
      method: 'POST',
      body: JSON.stringify({
        name,
        company,
        phone,
        email,
        subject,
        message,
      }),
    })
      .then((data: Response) => {
        if (data.status === 200) {
          // form submission success
          // clear form fields
          setName('')
          setCompany('')
          setPhone('')
          setEmail('')
          setSubject('')
          setMessage('')

          // show success message
          setModal({
            active: true,
            title: t(
              'contacts.submission.success.title',
              'Thank you for contacting us!'
            ),
            type: 'success',
            message: t(
              'contacts.success.message',
              'Message has been sent successfully.'
            ),
          })
        }
      })
      .catch((e: Error) => {
        // form submission error
        // show error message
        // don't use original 'e.message' error for security reasons
        setModal({
          active: true,
          title: t(
            'contacts.submission.error.title',
            'Sorry for the inconvenience!'
          ),
          type: 'error',
          message:
            t(
              'contacts.submission.error.message',
              'There was an error sending your message. Please try again later.'
            ) || e.message,
        })
      })
  }

  const getErrorMessage = (field: string): React.ReactElement | null => {
    return formError && formError[field] ? (
      <p className="text-red-600 text-xs italic absolute top-12 right-4">
        {formError[field]}
      </p>
    ) : null
  }

  return (
    <div className="relative max-w-3xl mx-auto w-full md:mb-20">
      <div className="w-full">
        <form onSubmit={handleFormSubmit}>
          <div className="relative max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:gap-x-8 md:px-8 mt-6">
            <div className="md:mt-2 lg:mt-6">
              <label htmlFor="name" className="relative block tracking-wide">
                {t('contacts.field.name', 'Name')}
                <span className="text-red-600">
                  {t('contacts.field.required', '*')}
                </span>
                <input
                  id="name"
                  name="names"
                  className="input-field"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setName(e.target.value)
                  }
                />
                {getErrorMessage('name')}
              </label>
            </div>
            <div className="md:mt-2 lg:mt-6">
              <label htmlFor="company" className="relative block tracking-wide">
                {t('contacts.field.company', 'Company')}
                <span className="text-red-600">
                  {t('contacts.field.required', '*')}
                </span>
                <input
                  id="company"
                  name="company"
                  className="input-field"
                  value={company}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setCompany(e.target.value)
                  }
                />
                {getErrorMessage('company')}
              </label>
            </div>
            <div className="md:mt-2 lg:mt-6">
              <label htmlFor="phone" className="relative block tracking-wide">
                {t('contacts.field.phone', 'Phone')}
                <span className="text-red-600">
                  {t('contacts.field.required', '*')}
                </span>
                <input
                  id="phone"
                  name="phone"
                  className="input-field"
                  value={phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setPhone(e.target.value)
                  }
                />
                {getErrorMessage('phone')}
              </label>
            </div>
            <div className="md:mt-2 lg:mt-6">
              <label htmlFor="email" className="relative block tracking-wide">
                {t('contacts.field.email', 'Email')}
                <span className="text-red-600">
                  {t('contacts.field.required', '*')}
                </span>
                <input
                  id="email"
                  name="email"
                  className="input-field"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setEmail(e.target.value)
                  }
                />
                {getErrorMessage('email')}
              </label>
            </div>
            <div className="md:mt-2 lg:mt-6 col-span-2">
              <label htmlFor="subject" className="relative block tracking-wide">
                {t('contacts.field.subject', 'Subject')}
                <span className="text-red-600">
                  {t('contacts.field.required', '*')}
                </span>
                <input
                  id="subject"
                  name="subject"
                  className="input-field"
                  value={subject}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setSubject(e.target.value)
                  }
                />
                {getErrorMessage('subject')}
              </label>
            </div>
            <div className="md:mt-2 lg:mt-6 col-span-2">
              <label htmlFor="message" className="relative block tracking-wide">
                {t('contacts.field.message', 'Message')}
                <span className="text-red-600">
                  {t('contacts.field.required', '*')}
                </span>
                <textarea
                  id="message"
                  name="message"
                  className="textarea-field"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
                    setMessage(e.target.value)
                  }
                />
                {getErrorMessage('message')}
              </label>
            </div>
            <div className="mt-8 md:mt-4 col-span-2 text-right">
              <button
                formNoValidate={false}
                className="px-6 py-3 text-white text-sm font-semibold leading-5 w-full md:w-auto bg-indigo-700 border-gray-400 rounded-md shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow focus:bg-indigo-800 focus:shadow-none"
              >
                {t('contacts.button.submit', 'Submit')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default React.memo(ContactForm)
