import React from 'react'

import useOnClickAway from '../hooks/useOnClickAway'
import { useMenuOpenState } from './MenuOpenStateContext'
import Logo from './Logo'
import LanguageSwitch from './LanguageSwitch'
import MenuMobileLinks from './MenuMobileLinks'
import MenuMobileCloseButton from './MenuMobileCloseButton'

export default function MenuMobile(): React.ReactElement {
  const [menuOpenState, setMenuOpenState] = useMenuOpenState()

  const closeMenu = React.useCallback((): void => {
    if (menuOpenState) {
      setMenuOpenState(false)
    }
  }, [setMenuOpenState, menuOpenState])

  // Close menu after click outside
  const overlayRef = React.useRef<HTMLDivElement | null>(null)
  useOnClickAway([overlayRef], closeMenu)

  return (
    <>
      <div
        className={`md:hidden overlay-container ${
          menuOpenState ? 'opened' : 'closed'
        }`}
      >
        <div className={`overlay ${menuOpenState ? 'opened' : 'closed'}`}>
          <div className="w-full h-full p-6 bg-gray-100" ref={overlayRef}>
            <div className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center">
              <MenuMobileCloseButton />
            </div>
            <div className="ml-2">
              <Logo width={65} height={40} />
            </div>
            <div className="mt-6">
              <MenuMobileLinks />
            </div>
            <div className="mt-4 mr-2">
              <LanguageSwitch className="flex items-center justify-end" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
