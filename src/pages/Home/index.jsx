

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
*/

/*
 <ModalDefault setShowModal={ setShowModal }>

                                    <StyledRegisterTechModal>
            
                                      <div>
                                        <StyledTitle tag="h3" fontSize="h3" >Cadastrar Tecnología</StyledTitle>
                                        <StyledButton onClick={()=> setShowModal(false)} buttonSize="vSmall" buttonStyle="outline2" >X</StyledButton>
                                      </div>
                                      <FormContainer>
            
                                        <form>

                                          <label htmlFor="title">Nome</label>
                                          <input type="text" id="title" placeholder="Ex. Typescript" />

                                          <label htmlFor="status">Selecionar status</label>
                                          <select  id="status">
                                            <option value="">Status...</option>
                                            <option value="Iniciante">Iniciante</option>
                                            <option value="Intermediário">Intermediário</option>
                                            <option value="Avançado">Avançado</option>
                                          </select>
                                  
                                          <StyledButton type="submit" buttonSize="default" buttonStyle="solidPrimary" >Cadastrar tecnologia</StyledButton>

                                        </form>
                                                        
                                      </FormContainer>
                                
                                    </StyledRegisterTechModal>
            
                            </ModalDefault>

                            */

                      