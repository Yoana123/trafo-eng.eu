import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavbarLinkProps {
  href: string
  children: React.ReactElement<HTMLAnchorElement>
}

const NavbarLink = ({
  href,
  children,
}: NavbarLinkProps): React.ReactElement => {
  const { pathname } = useRouter()
  const { props: childrenProps } = children

  let className = childrenProps.className || ''

  if (pathname === href) {
    className = `${className} text-indigo-700`
  }

  return (
    <Link href={href}>
      {React.isValidElement(children)
        ? React.cloneElement(children, { className })
        : null}
    </Link>
  )
}

export default NavbarLink
