import React from 'react'
import { NavLink } from 'react-router-dom'


function RecipesNav() {
  return (
    <div>
        <div className="recipes-list">
            <NavLink className='recipes-item' to='allrecipes' >Все Рецепты</NavLink>
            <NavLink className='recipes-item' to='first' >Первые блюда</NavLink>
            <NavLink className='recipes-item' to='salads' >Салаты</NavLink>
            <NavLink className='recipes-item' to='second' >Вторые блюда</NavLink>
            <NavLink className='recipes-item' to='drinks' >Напитки, коктели</NavLink>
            <NavLink className='recipes-item' to='sweets' >Сладости</NavLink>
        </div>
    </div>
  )
}

export default RecipesNav