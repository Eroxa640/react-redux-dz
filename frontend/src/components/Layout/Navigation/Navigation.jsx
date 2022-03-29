import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div className="nav">
        <div className="logo">
          <NavLink to='/' className='logo-title'>Recipes</NavLink>
        </div>
        <div className="navbar">
            <NavLink to='/recipes' className='nav__link'>Рецепты</NavLink>
            <NavLink to='/addrecipes' className='nav__link'>Добавить рецепт</NavLink>
        </div>
    </div>
  )
}

export default Navigation