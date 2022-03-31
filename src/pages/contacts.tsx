import React from 'react'

import useTranslation from '../hooks/useTranslation'
import ContactForm from '../components/ContactForm'
import Metadata from '../components/Metadata'
import { Phone, Email, Location } from '../components/Icons'

function ContactsPage(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <>
      <Metadata
        metadata={{
          title: t('services.metadata.title', 'Services'),
          description: t('services.metadata.description', ''),
        }}
      />
      <section className="relative max-w-screen-xl w-full mx-auto mt-8 md:mt-12 px-5 md:px-8 lg:px-16">
        <div className="relative text-center mb-20">
          <div className="section-background hidden absolute inset-0 w-full -z-1 md:block "></div>
          <div className="relative">
            <h1 className="text-indigo-900 text-3xl font-heading font-extrabold md:text-4xl xl:text-5.5xl xl:leading-tight">
              {t('contacts.title', 'Contacts')}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-gray-700 leading-snug xl:mt-5 xl:text-xl">
              {t('contacts.description', '')}
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-6 flex items-center justify-center space-x-5 md:mb-20">
            <a
              rel="noreferrer"
              href={`callto:${t('contacts.callto1', '')}`}
              className="inline-flex items-center justify-center px-3 py-2 text-gray-600 text-sm font-semibold leading-5 bg-white border border-transparent border-opacity-25 rounded-md shadow-sm transition duration-200 hover:text-gray-800 hover:border-gray-200 hover:shadow focus:text-gray-600 focus:shadow-none min-w-[60px]"
            >
              <Phone className="h-4 w-4 text-indigo-600" />
              <span className="hidden md:block ml-2">
                {t('contacts.callto1', '')}
              </span>
            </a>
            <a
              rel="noreferrer"
              href={`callto:${t('contacts.callto2', '')}`}
              className="inline-flex items-center justify-center px-3 py-2 text-gray-600 text-sm font-semibold leading-5 bg-white border border-transparent border-opacity-25 rounded-md shadow-sm transition duration-200 hover:text-gray-800 hover:border-gray-200 hover:shadow focus:text-gray-600 focus:shadow-none min-w-[60px]"
            >
              <Phone className="h-4 w-4 text-indigo-600" />
              <span className="hidden md:block ml-2">
                {t('contacts.callto2', '')}
              </span>
            </a>
            <a
              rel="noreferrer"
              href={`mailto:${t('contacts.mailto1', '')}`}
              className="inline-flex items-center justify-center px-3 py-2 text-gray-600 text-sm font-semibold leading-5 bg-white border border-transparent border-opacity-25 rounded-md shadow-sm transition duration-200 hover:text-gray-800 hover:border-gray-200 hover:shadow focus:text-gray-600 focus:shadow-none min-w-[60px]"
            >
              <Email className="h-4 w-4 text-indigo-600" />
              <span className="hidden md:block ml-2">
                {t('contacts.mailto1', '')}
              </span>
            </a>
            <a
              rel="noreferrer"
              href="https://www.google.com/maps/dir/Current+Location/42.275909237548476,+22.664189742302657"
              target="_blank"
              className="inline-flex items-center justify-center px-3 py-2 text-gray-600 text-sm font-semibold leading-5 bg-white border border-transparent border-opacity-25 rounded-md shadow-sm transition duration-200 hover:text-gray-800 hover:border-gray-200 hover:shadow focus:text-gray-600 focus:shadow-none min-w-[60px]"
            >
              <Location className="h-4 w-4 text-indigo-600" />
              <span className="hidden md:block ml-2">
                {t('contacts.address', 'Kyustendil')}
              </span>
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  )
}

export default React.memo(ContactsPage)
