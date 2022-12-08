import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'




const RoutesMain = () => {
  return (
    <Routes>
        <Route path='/' element={ <Navigate to="/login" /> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/home/:name' element={ <Home/> }/>
        <Route path='*' element={ <Home/> }/>
    </Routes>
  )
}

export default RoutesMain