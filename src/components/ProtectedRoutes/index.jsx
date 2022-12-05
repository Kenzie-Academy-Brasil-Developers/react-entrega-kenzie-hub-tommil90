import React, { useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({user}) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!user){
        navigate("/")
    }
  }, [])

  return (
    <>
        {user ? <Outlet /> : <span>Carregando...</span> }
    </>
  )
}

export default ProtectedRoutes  

/*
<Route path="/recipes" element={<ProtectedRoutes user={user} />}>

*/