import React from 'react'

import About from './about'

function Home(): React.ReactElement {
  return <About />
}

export default React.memo(Home)
