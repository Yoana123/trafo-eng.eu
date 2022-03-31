import React from 'react'

import { Provider as MenuOpenProvider } from './MenuOpenStateContext'
import { Provider as LocaleProvider } from './LocaleContext'
import { Provider as ModalProvider } from './ModalContext'

import Navbar from './Navbar'
import MenuMobile from './MenuMobile'
import Footer from './Footer'
import Modal from './Modal'

export interface PageLayoutProps {
  children: React.ReactNode
}

function Layout(props: PageLayoutProps): React.ReactElement {
  const { children } = props

  return (
    <>
      {/* Header */}
      <Navbar />

      <div role="main" id="main">
        {children}
      </div>

      {/* Footer  */}
      <Footer />

      {/* Overlay based components  */}
      <MenuMobile />
      <Modal />
    </>
  )
}

function LayoutWrapper(props: PageLayoutProps): React.ReactElement {
  return (
    <LocaleProvider>
      <ModalProvider>
        <MenuOpenProvider>
          <Layout {...props} />
        </MenuOpenProvider>
      </ModalProvider>
    </LocaleProvider>
  )
}

export default LayoutWrapper
