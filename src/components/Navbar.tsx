import React from 'react'
import Link from 'next/link'

import useTranslation from '../hooks/useTranslation'
import Logo from './Logo'
import NavbarMobileMenuButton from './NavbarMobileMenuButton'
import NavbarLinks from './NavbarLinks'
import { useMenuOpenState } from './MenuOpenStateContext'

function Navbar(): React.ReactElement {
  const { t } = useTranslation()
  const [, setMenuOpenState] = useMenuOpenState()

  const toggleMenuOpen = React.useCallback(
    (): void => setMenuOpenState((state: boolean) => !state),
    [setMenuOpenState]
  )

  return (
    <>
      <Link href="#main">
        <a id="top" className="block w-0 h-0 overflow-hidden text-1px">
          {t('skip.content', 'Skip to content')}
        </a>
      </Link>
      <nav
        role="navigation"
        id="navbar"
        className="max-w-screen-xl mx-auto p-5 md:px-8 lg:px-16"
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="inline-flex items-center">
              <Logo width={65} height={40} />
              <span className="ml-2 text-blue-900 uppercase font-heading leading-6 text-sm">
                {t('logo.alt', 'Trafo-Engeneering')}
              </span>
            </a>
          </Link>

          <NavbarLinks />

          <NavbarMobileMenuButton onClick={toggleMenuOpen}>
            {t('navigation.title', 'Menu')}
          </NavbarMobileMenuButton>
        </div>
      </nav>
    </>
  )
}

export default React.memo(Navbar)
