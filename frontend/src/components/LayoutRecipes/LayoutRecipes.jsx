import React from 'react'
import RecipesNav from './RecipesNav/RecipesNav'

function LayoutRecipes(props) {
  return (
    <div className='container-recipes'>
        <RecipesNav/>
        {props.chilren}
    </div>
  )
}

export default LayoutRecipes