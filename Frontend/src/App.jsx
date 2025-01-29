import React from 'react'
import LoginPage from './pages/loginPage'
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignupPage from './pages/singUpPage'
import ProductPage from './pages/productPage'
import CreatePage from './pages/createPage'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path='/create-product' element={<CreatePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
