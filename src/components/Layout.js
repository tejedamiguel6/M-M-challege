import * as React from 'react'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div>
      <h3
        style={{
          textAlign: 'center',
          paddingTop: '25px',
          marginBottom: '45px',
        }}
      >
        MagMutual Assignment
      </h3>
      <main>{children}</main>
    </div>
  )
}

export default Layout
