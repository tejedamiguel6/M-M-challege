import * as React from 'react'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', paddingTop: '10px' }}>
        MagMutual Assignment
      </h3>
      <main>{children}</main>
    </div>
  )
}

export default Layout
