import React, { useEffect} from 'react'
import { useContext } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'




export const ProtectedRoutes = () => {

  const { user, loading } = useContext(AuthContext)

  const location = useLocation()

    if (loading) {
      return null
    }

    return user ? <Outlet/> : <Navigate to="/" state={{ from: location }} />
}

//em Routes ...

<Route element={ <ProtectedRoutes/> } >
      <Route></Route>
      <Route></Route>
      <Route></Route>
</Route>

const ProtectedRoutesALt = ({user}) => {
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



/*
<Route path="/recipes" element={<ProtectedRoutes user={user} />}>

*/