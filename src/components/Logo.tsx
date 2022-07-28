import React from 'react'
import Image from 'next/image'

interface LogoProps {
  width?: number
  height?: number
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <Image
      src="/images/logo.png"
      layout="fixed"
      width={width}
      height={height}
      alt="Trafo-Eng Logo"
    />
  )
}

export default React.memo(Logo)
