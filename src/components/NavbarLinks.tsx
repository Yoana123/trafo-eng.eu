import React from 'react'

import useTranslation from '../hooks/useTranslation'
import LanguageSwitch from './LanguageSwitch'
import NavbarLink from './NavbarLink'

const NavbarLinks = (): React.ReactElement => {
  const { t } = useTranslation()

  return (
    <div className="hidden text-gray-800 md:space-x-6 md:flex md:items-center">
      <NavbarLink href="/about">
        <a className="text-sm font-semibold leading-5 hover:text-indigo-700">
          {t('navigation.about', 'About us')}
        </a>
      </NavbarLink>
      <span className="w-px h-5 bg-gray-600 bg-opacity-50"></span>
      <NavbarLink href="/products">
        <a className="text-sm font-semibold leading-5 hover:text-indigo-700">
          {t('navigation.products', 'Products')}
        </a>
      </NavbarLink>
      <span className="w-px h-5 bg-gray-600 bg-opacity-50"></span>
      <NavbarLink href="/services">
        <a className="text-sm font-semibold leading-5 hover:text-indigo-700">
          {t('navigation.services', 'Services')}
        </a>
      </NavbarLink>
      <span className="w-px h-5 bg-gray-600 bg-opacity-50"></span>
      <NavbarLink href="/contacts">
        <a className="text-sm font-semibold leading-5 hover:text-indigo-700">
          {t('navigation.contacts', 'Contacts')}
        </a>
      </NavbarLink>
      <LanguageSwitch />
    </div>
  )
}

export default NavbarLinks
