import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'



const RoutesHTML = () => {
  return (
    <Routes>
        <Route path='/' element={ <Navigate to="/login" /> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/Register' element={ <Register/> }/>
        <Route path='/Home/:name' element={ <Home/> }/>
    </Routes>
  )
}

export default RoutesHTML