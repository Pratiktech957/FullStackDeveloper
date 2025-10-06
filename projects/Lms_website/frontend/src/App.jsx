import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'



const App = () => {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />



      </Routes>

    </div>
  )
}

export default App
