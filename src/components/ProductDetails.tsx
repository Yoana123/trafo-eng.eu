import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import useTranslation from '../hooks/useTranslation'

export interface Product {
  title: string
  description: string
  image: string
  content: {
    table: {
      rows: Array<Array<string>>
    }
  }
}

export default function ProductDetails({
  product,
}: {
  product: Product
}): React.ReactElement {
  const { t } = useTranslation()
  const {
    title,
    description,
    image,
    content: { table },
  } = product

  return (
    <div className="relative w-full pt-6">
      <div className="relative w-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 pb-5">
        <div className="w-full md:py-20 text-center md:text-left">
          <h1 className="font-heading font-medium text-gray-900 text-3xl leading-10 px-3">
            {title}
          </h1>
          <p className="mt-4 text-gray-800 leading-6 sm:text-gray-600">
            {description}
          </p>
          <div className="my-6 flex items-center justify-center md:justify-start space-x-4">
            <Link href="/contacts">
              <a className="px-3 py-2 text-white text-sm font-semibold leading-5 bg-indigo-700 border-gray-400 rounded-md shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow focus:bg-indigo-800 focus:shadow-none">
                {t('products.button.inquiry', 'Make an inquiry')}
              </a>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden -z-1">
          <Image
            src={image}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt={title}
          />
        </div>
      </div>
      <div className="w-full my-5 max-w-full overflow-x-scroll">
        {table.rows.map(
          (row: string[], rowId: number): React.ReactElement => (
            <div
              key={rowId}
              className={`product-table-cols-${row.length} border-t border-l border-r border-gray-300 last:border-b odd:bg-white`}
            >
              {row.map((col: string, colId: number) => {
                return (
                  <div
                    key={colId}
                    className="flex items-center justify-center first:justify-start text-xs py-2 odd:bg-blue-100 first:px-2"
                  >
                    {col}
                  </div>
                )
              })}
            </div>
          )
        )}
      </div>
    </div>
  )
}
