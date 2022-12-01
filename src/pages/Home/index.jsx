

import React from 'react'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import { Container } from '../../styles/Container'
import { StyledMainHome } from './style'


const Home = () => {
  return (
    <>
        <NavBar/>
        
        <Container>
          <Header/>
          <StyledMainHome>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
          </StyledMainHome>
        </Container>
    </>
  )
}

export default Home