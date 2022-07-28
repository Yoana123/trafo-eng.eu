import React from 'react'

import { LocaleContext } from '../components/LocaleContext'

const useTranslation = () => {
  const context = React.useContext(LocaleContext)

  if (!context) {
    throw new Error('useTranslation is used outside <Provider>')
  }

  const { messages } = context

  return {
    t: (key: string, fallback: string) => {
      if (Object.keys(messages).length === 0) {
        return fallback
      }

      if (messages[key] !== undefined) {
        return messages[key]
      }

      if (process.env.NODE_ENV === 'development') {
        console.info(`Using fallback translation for key '${key}'`)
      }

      return fallback
    },
  }
}

export default useTranslation
