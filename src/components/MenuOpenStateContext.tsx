import React from 'react'

interface ProviderProps {
  children: React.ReactElement
}

type MenuOpenStateContextType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

const MenuOpenStateContext = React.createContext<
  MenuOpenStateContextType | undefined
>(undefined)

export function Provider({ children }: ProviderProps): React.ReactElement {
  const state = React.useState<boolean>((): boolean => {
    return false
  })

  return (
    <MenuOpenStateContext.Provider value={state}>
      {children}
    </MenuOpenStateContext.Provider>
  )
}

export const useMenuOpenState = (): MenuOpenStateContextType => {
  const context = React.useContext(MenuOpenStateContext)

  if (context === undefined) {
    throw new Error('useMenuOpenState used outside of context Provider')
  }

  return context
}
