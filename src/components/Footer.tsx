import React from 'react'

import useTranslation from '../hooks/useTranslation'
import Logo from './Logo'
import FooterLinks from './FooterLinks'

export default function Footer(): React.ReactElement {
  const { t } = useTranslation()
  const copyrightYear = new Date().getFullYear()

  return (
    <footer className="max-w-screen-xl mx-auto p-5 md:px-8 lg:px-16 mt-16 md:mt-20">
      <section className="flex justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center">
            <Logo width={60} height={40} />
            <span className="text-sm text-gray-600 ml-4">
              &copy; {copyrightYear} {t('footer.copyright', 'Copyright')}
            </span>
          </div>
          <FooterLinks />
        </div>
      </section>
    </footer>
  )
}
