import React from 'react'
import Image from 'next/image'

import useTranslation from '../hooks/useTranslation'
import Metadata from '../components/Metadata'

function About(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <>
      <Metadata
        metadata={{
          title: t('about.metadata.title', 'About Us'),
          description: t('about.metadata.description', ''),
        }}
      />
      <section className="relative max-w-screen-xl w-full mx-auto mt-8 md:mt-12 px-5 md:px-8 lg:px-16">
        <div className="relative rounded-lg overflow-hidden h-[15rem] md:h-[20rem] lg:h-[25rem]">
          <div className="absolute top-0 left-0 w-full h-full bg-indigo-900 bg-opacity-40 z-10"></div>
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full z-10"
            src="/images/about/about.png"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt={t('about.title', '')}
          />
          <div className="absolute w-full h-full top-0 left=0 z-30">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-white text-center text-4xl md:text-6xl font-bold font-heading px-5 mt-10 md:mt-20">
                {t('about.title', 'About Us')}
              </h1>
              <p className="mt-6 max-w-xl px-5 mx-auto text-center text-white font-bold text-md leading-relaxed md:mt-8 md:text-2xl lg:mt-10">
                {t('about.description', '')}
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 max-w-screen-xl mx-auto mt-10 md:px-8 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32 lg:px-16">
          <h1 className="text-indigo-700 font-bold font-heading text-3xl leading-10 text-center md:text-left">
            {t('about.subtitle', 'About Us')}
          </h1>
          <p className="mt-6 text-gray-700 leading-relaxed">
            {t('about.text', 'About text')}
          </p>
        </div>
      </section>
    </>
  )
}

export default About
