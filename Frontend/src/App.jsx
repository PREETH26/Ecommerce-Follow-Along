import React from 'react'
import LoginPage from './pages/loginPage'
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
