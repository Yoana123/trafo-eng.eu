import React from 'react'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Link from 'next/link'

import useTranslation from '../hooks/useTranslation'
import Metadata from '../components/Metadata'
import ProductDetails, { Product } from '../components/ProductDetails'

interface ProductsProps {
  products: Product[]
}

function Products({ products }: ProductsProps): React.ReactElement {
  const { t } = useTranslation()
  return (
    <>
      <Metadata
        metadata={{
          title: t('products.metadata.title', 'Products'),
          description: t('products.metadata.description', ''),
        }}
      />
      <section className="relative max-w-screen-xl w-full mx-auto mt-8 md:mt-12 px-5 md:px-8 lg:px-16">
        <div className="relative mb-20 text-center">
          <div className="section-background hidden absolute inset-0 w-full -z-1 md:block "></div>
          <div className="relative">
            <h1 className="text-gray-900 text-3xl font-heading font-extrabold md:text-4xl xl:text-5.5xl xl:leading-tight">
              {t('products.title', 'Products')}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-gray-900 leading-snug xl:mt-5 xl:text-xl">
              {t('products.description', '')}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <Link href="/contacts">
                <a className="px-3 py-2 text-white text-sm font-semibold leading-5 bg-indigo-700 border-gray-400 rounded-md shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow focus:bg-indigo-800 focus:shadow-none">
                  {t('products.button.inquiry', 'Make an inquiry')}
                </a>
              </Link>
            </div>
          </div>
        </div>
        {products.map(
          (product, productIndex): React.ReactElement => (
            <ProductDetails key={productIndex} product={product} />
          )
        )}
      </section>
    </>
  )
}

export async function getStaticProps({
  locale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<ProductsProps>> {
  const products = (await import(`../data/${locale}/products`)).default
  return {
    props: { products },
  }
}

export default React.memo(Products)
