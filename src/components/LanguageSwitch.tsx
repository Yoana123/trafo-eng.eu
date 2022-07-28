import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useMenuOpenState } from './MenuOpenStateContext'
import { useLocaleContext, LocaleCode } from './LocaleContext'

const LanguageSwitch = ({
  className,
}: {
  className?: string
}): React.ReactElement => {
  const [menuOpenState, setMenuOpenState] = useMenuOpenState()
  const { changeLocale } = useLocaleContext()
  const { locales, locale, asPath } = useRouter()

  const closeMenu = React.useCallback((): void => {
    if (menuOpenState) {
      setMenuOpenState(false)
    }
  }, [setMenuOpenState, menuOpenState])

  const switchLocale = (code: string): void => {
    closeMenu()
    changeLocale(code as LocaleCode, asPath)
  }

  return (
    <div className={className}>
      {locales &&
        locales.map((code: string): React.ReactElement | undefined => {
          if (code !== locale) {
            return (
              <button
                key={code}
                type="button"
                aria-expanded
                className="appearance-none inline-flex justify-center block ml-3 align-middle"
                onClick={() => switchLocale(code)}
              >
                <Image
                  src={`/images/flags/${code}.svg`}
                  width="30"
                  height="20"
                  alt={`${code} language`}
                />
              </button>
            )
          }
        })}
    </div>
  )
}

export default LanguageSwitch
