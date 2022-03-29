import React from 'react'
import Navigation from './Navigation/Navigation'
import './Layout.css'

function Layout(props) {
  return (
    <div className='main-wrapper'>
        <Navigation/>
        <hr />
        {props.children}
    </div>
  )
}

export default Layout