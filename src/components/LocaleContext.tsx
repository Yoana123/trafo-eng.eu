import React from 'react'
import { useRouter } from 'next/router'

import { getCookie, setCookie } from '../utilities/cookies'
import fetchTranslations from '../utilities/fetchTranslations'

export type LocaleCode = 'en' | 'bg'

interface ProviderState {
  locale: LocaleCode
  messages: Record<string, string>
}

interface ProviderProps {
  children: React.ReactElement
}

export interface LocaleContextType extends ProviderState {
  changeLocale: (code: LocaleCode, currentPath: string) => Promise<void>
}

export const LocaleContext = React.createContext<LocaleContextType | undefined>(
  undefined
)

export function Provider({ children }: ProviderProps): React.ReactElement {
  const initialLocaleLoaded = React.useRef<boolean>(false)
  const { locale: pathLocale, asPath, push } = useRouter()
  const cookieLocale = getCookie('NEXT_LOCALE')
  const localeCode = cookieLocale ? cookieLocale : pathLocale

  const [{ locale, messages }, setLocale] = React.useState<ProviderState>({
    locale: localeCode as LocaleCode,
    messages: {},
  })

  const changeLocale = React.useCallback(
    async (code: LocaleCode, currentPath: string): Promise<void> => {
      if (initialLocaleLoaded.current && code === locale) {
        return
      }

      const strings = await fetchTranslations(code)
      initialLocaleLoaded.current = true

      setLocale({ locale: code, messages: strings })
      setCookie('NEXT_LOCALE', code)

      await push(currentPath, currentPath, { locale: code })
    },
    [locale]
  )

  React.useEffect(() => {
    changeLocale(locale, asPath)
  }, [])

  return (
    <LocaleContext.Provider value={{ locale, messages, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocaleContext(): LocaleContextType {
  const context = React.useContext(LocaleContext)

  if (context === undefined) {
    throw new Error('useLocaleContext is used outside Provider')
  }

  return context
}
