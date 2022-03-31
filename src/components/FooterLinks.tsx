import React from 'react'

import useTranslation from '../hooks/useTranslation'
import NavbarLink from './NavbarLink'

export default function FooterLinks(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <div className="hidden md:flex flex-row items-end justify-between">
      <NavbarLink href="/about">
        <a className="text-sm hover:text-indigo-700 pr-4">
          {t('navigation.about', 'About')}
        </a>
      </NavbarLink>
      <NavbarLink href="/products">
        <a className="text-sm hover:text-indigo-700 pr-4">
          {t('navigation.products', 'Products')}
        </a>
      </NavbarLink>
      <NavbarLink href="/services">
        <a className="text-sm hover:text-indigo-700 pr-4">
          {t('navigation.services', 'Services')}
        </a>
      </NavbarLink>
      <NavbarLink href="/contacts">
        <a className="text-sm hover:text-indigo-700 pr-4">
          {t('navigation.contacts', 'Contacts')}
        </a>
      </NavbarLink>
    </div>
  )
}
