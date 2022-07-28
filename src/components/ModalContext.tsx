import React from 'react'

interface ProviderProps {
  children: React.ReactElement
}

interface ModalStateType {
  active: boolean
  type?: 'success' | 'error' | 'info'
  title?: string
  message?: string
}

type ModalContextType = [
  ModalStateType,
  React.Dispatch<React.SetStateAction<ModalStateType>>
]

const ModalContext = React.createContext<ModalContextType | undefined>(
  undefined
)

export function Provider({ children }: ProviderProps): React.ReactElement {
  const state = React.useState<ModalStateType>((): ModalStateType => {
    return {
      active: false,
      type: 'info',
      title: '',
      message: '',
    }
  })

  return <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
}

export const useModal = (): ModalContextType => {
  const context = React.useContext(ModalContext)

  if (context === undefined) {
    throw new Error('useModalState used outside of context Provider')
  }

  return context
}
