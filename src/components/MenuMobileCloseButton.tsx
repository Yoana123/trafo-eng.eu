import React from 'react'

import useTranlation from '../hooks/useTranslation'
import { useMenuOpenState } from './MenuOpenStateContext'
import { Close } from './Icons'

const MenuMobileCloseButton = (): React.ReactElement => {
  const { t } = useTranlation()
  const [, setMenuOpenState] = useMenuOpenState()

  return (
    <button
      className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      onClick={(): void => setMenuOpenState(false)}
    >
      <span className="sr-only">
        {t('navigation.close', 'Close Navigation')}
      </span>
      <Close className="w-3 h-3" />
    </button>
  )
}

export default MenuMobileCloseButton
