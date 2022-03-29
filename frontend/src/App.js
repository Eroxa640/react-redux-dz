import React from 'react'
import Recipes from './components/Recipes/Recipes'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AddRecipes from './containers/AddRecipes/AddRecipes'
import LayoutRecipes from './components/LayoutRecipes/LayoutRecipes'

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/recipes' element={<Recipes/>} >
            <Route/>
          </Route>
          <Route path='/addrecipes' element={<AddRecipes/>} />
        </Routes>
      </Layout>
  )
}

export default App
