import React from 'react'
import LoginPage from './pages/loginPage'
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignupPage from './pages/singUpPage'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
