import React from 'react'
import { useRouter } from 'next/router'

import useTranslation from '../hooks/useTranslation'
import { useMenuOpenState } from './MenuOpenStateContext'
import NavbarLink from './NavbarLink'

export const MenuMobileLinks = (): React.ReactElement => {
  const { events: routerEvents } = useRouter()
  const [, setMenuOpenState] = useMenuOpenState()
  const { t } = useTranslation()

  // Close menu after click on navigation link
  React.useEffect(() => {
    routerEvents.on('routeChangeStart', () => setMenuOpenState(false))
  }, [setMenuOpenState, routerEvents])

  return (
    <nav className="w-full pb-3 border-b border-gray-600 border-opacity-50">
      <ul className="relative">
        <li className="px-3 py-2 text-base font-semibold">
          <NavbarLink href="/about">
            <a>{t('navigation.about', 'About us')}</a>
          </NavbarLink>
        </li>
        <li className="px-3 py-2 text-base font-semibold">
          <NavbarLink href="/products">
            <a>{t('navigation.products', 'Products')}</a>
          </NavbarLink>
        </li>
        <li className="px-3 py-2 text-base font-semibold">
          <NavbarLink href="/services">
            <a>{t('navigation.services', 'Services')}</a>
          </NavbarLink>
        </li>
        <li className="px-3 py-2 text-base font-semibold">
          <NavbarLink href="/contacts">
            <a>{t('navigation.contacts', 'Contacts')}</a>
          </NavbarLink>
        </li>
      </ul>
    </nav>
  )
}

export default MenuMobileLinks
