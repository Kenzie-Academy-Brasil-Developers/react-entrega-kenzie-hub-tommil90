

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import { api } from '../../services/api'
import { Container } from '../../styles/Container'
import { StyledMainHome } from './style'


const Home = () => {

  const [user, setUser] = useState({})  
  const [verification, setVerification] = useState(false)
  

  
  useEffect(() => {

    async function getDataUser(){
        
        try {
            
            const userID = JSON.parse(localStorage.getItem("@USERID"))

            

            const response = await api.get(`/users/${userID}`)

         
            if(response.status === 200){
                
                setUser(response.data)
                setVerification(true)
        
            }

        } catch (error) {
            console.log(error)
        }

    }    
    getDataUser()
}, [ ])

  return (
    <>

    {
      verification ? (

        <>
                 <NavBar/>
      
                  <Container>
                    <Header user={ user } />
                    <StyledMainHome>
                      <h2>Que pena! Estamos em desenvolvimento :(</h2>
                      <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </StyledMainHome>
                  </Container>
        </>

      ) : (

        <Link to={"/login"} ><h1>Precisa fazer login </h1></Link>
          

      )
    }

  </>
  )
}

export default Home


/*
        <NavBar/>
        
        <Container>
          <Header user={ user } />
          <StyledMainHome>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
          </StyledMainHome>
        </Container>

 */       


/*
  <>

      {
        user ? (

          <>
                   <NavBar/>
        
                    <Container>
                      <Header user={ user } />
                      <StyledMainHome>
                        <h2>Que pena! Estamos em desenvolvimento :(</h2>
                        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                      </StyledMainHome>
                    </Container>
          </>

        ) : (

          <Navigate to={"/login"} />

        )
      }

    </>
    */