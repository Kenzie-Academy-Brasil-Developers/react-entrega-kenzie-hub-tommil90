

import React, { useContext } from 'react'
import {  Navigate } from 'react-router-dom'
import CreateTechModal from '../../components/CreateTechModal'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import TechList from '../../components/TechList'
import { AuthContext } from '../../contexts/AuthContext'
import { TechProvider } from '../../contexts/TechContext'
import { UserContext } from '../../contexts/UserContext'
import { StyledButton } from '../../styles/buttons'
import { Container } from '../../styles/Container'
import { StyledTitle } from '../../styles/typography'
import { StyledMainHome } from './style'


const Home = () => {

  const { user, verification } = useContext(AuthContext)
  const { showModal, setShowModal } = useContext(UserContext)


  if (verification){
    return <h1>Carregando ...</h1>
  }
  

  return (
    <>

    {
      user ? (

        <>
                 <NavBar/>
      
                  <Container>

                    <Header/>

                    <TechProvider>

                        <StyledMainHome>
                          <div>
                            <StyledTitle tag="h3" fontSize="h3" >Tecnologias</StyledTitle>
                            <StyledButton onClick={()=> setShowModal(true)} buttonSize="vSmall" buttonStyle="outline2" >+</StyledButton>
                    
                            {
                              showModal &&  <CreateTechModal />          
                            }

                          </div>
                          <TechList/>
                        </StyledMainHome>

                    </TechProvider>

                  </Container>
        </>

      ) : (

        <Navigate to={"/login"}/>
          

      )
    }

  </>
  )
}

export default Home


