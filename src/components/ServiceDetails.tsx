import React from 'react'
import Image from 'next/image'

import { List as ListIcon } from './Icons'

export interface Service {
  title: string
  description: string
  image: string
  content: {
    table: {
      rows: Array<string>
    }
  }
}

export default function ServiceDetails({
  service,
}: {
  service: Service
}): React.ReactElement {
  const {
    title,
    description,
    image,
    content: { table },
  } = service

  return (
    <div className="relative max-w-3xl mx-auto w-full pt-6 md:mb-20 grid grid-cols-1 md:grid-cols-service">
      <div className="md:pb-20">
        <h1 className="text-gray-900 text-2xl leading-9 font-medium">
          {title}
        </h1>
        <p className="mt-4 text-gray-800 leading-6">{description}</p>
        <ul className="mt-6 ml-12">
          {table.rows.map((row: string, rowId: number) => (
            <li key={rowId} className="relative px-6 py-2">
              <ListIcon className="absolute top-3 -left-2 text-blue-700" />
              <span className="">{row}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block overflow-hidden relative">
        <Image
          className="rounded-lg"
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={title}
        />
      </div>
    </div>
  )
}
