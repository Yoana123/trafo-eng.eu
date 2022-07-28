import React from 'react'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Link from 'next/link'

import useTranslation from '../hooks/useTranslation'
import Metadata from '../components/Metadata'
import ServiceDetails, { Service } from '../components/ServiceDetails'

interface ServicesProps {
  services: Service[]
}

function Services(props: ServicesProps): React.ReactElement {
  const { t } = useTranslation()
  const { services } = props

  return (
    <>
      <Metadata
        metadata={{
          title: t('services.metadata.title', 'Services'),
          description: t('services.metadata.description', ''),
        }}
      />
      <section className="relative max-w-screen-xl w-full mx-auto mt-8 md:mt-12 px-5 md:px-8 lg:px-16">
        <div className="relative text-center mb-10 md:mb-20">
          <div className="section-background hidden absolute inset-0 w-full -z-1 md:block "></div>
          <div className="relative">
            <h1 className="text-gray-900 text-3xl font-heading font-extrabold md:text-4xl xl:text-5.5xl xl:leading-tight">
              {t('services.title', 'Services')}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-gray-900 leading-snug xl:mt-5 xl:text-xl">
              {t('services.description', '')}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <Link href="/contacts">
                <a className="px-3 py-2 text-white text-sm font-semibold leading-5 bg-indigo-700 border-gray-400 rounded-md shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow focus:bg-indigo-800 focus:shadow-none">
                  {t('services.button.inquiry', 'Make an inquiry')}
                </a>
              </Link>
            </div>
          </div>
        </div>
        {services.map(
          (service, serviceIndex): React.ReactElement => (
            <ServiceDetails key={serviceIndex} service={service} />
          )
        )}
      </section>
    </>
  )
}

export async function getStaticProps({
  locale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<ServicesProps>> {
  const services = (await import(`../data/${locale}/services`)).default

  return {
    props: { services },
  }
}

export default React.memo(Services)
