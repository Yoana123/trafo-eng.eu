import React from 'react'

import { Hamburger } from './Icons'

interface NavbarMobileMenuButtonProps {
  onClick: () => void
}

const NavbarMobileMenuButton: React.FC<NavbarMobileMenuButtonProps> = ({
  onClick,
  children,
}): React.ReactElement => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-2.5 py-2 border border-gray-400 border-opacity-50 rounded-md transition duration-200 md:hidden hover:text-gray-900 hover:bg-gray-100 hover:border-opacity-100 focus:text-gray-600 focus:bg-gray-200 focus:outline-none focus:ring"
    >
      <Hamburger className="w-3 h-3 text-gray-800" />
      <span className="ml-3 text-gray-800 text-sm font-semibold leading-5">
        {children}
      </span>
    </button>
  )
}

export default NavbarMobileMenuButton
