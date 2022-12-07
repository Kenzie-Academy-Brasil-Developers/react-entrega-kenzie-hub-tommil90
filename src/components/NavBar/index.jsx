
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../../styles/buttons'
import { StyledContainerNav, StyledNav } from './style'
import { Container } from '../../styles/Container'
import Logo from '../../assets/Logo.svg'

const NavBar = () => {

    const navigate = useNavigate()

    const handleLogout = () =>{

      localStorage.removeItem("@kenzieHub:TOKEN")
      localStorage.removeItem("@kenzieHub:USERID")
      navigate("/")
    }

  return (
        <StyledNav>
            <Container>
             <StyledContainerNav>
                        <img src={ Logo } alt="Kenzie Hub" />
                        <StyledButton onClick={handleLogout} buttonSize="small" buttonStyle="outline2">Sair</StyledButton>
            </StyledContainerNav>
                 
            </Container>
        </StyledNav>
        
    
  )
}

export default NavBar