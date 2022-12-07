import React from 'react'
import { StyledButton } from '../../../styles/buttons'
import { StyledTitle } from '../../../styles/typography'
import { StyledCard } from './style'
import { FaRegTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { TechContext } from '../../../contexts/TechContext';


const CardTech = ({ title, status, id }) => {

  const { deleteTech } = useContext( TechContext )

  return (
    <StyledCard>
        <StyledTitle tag="h3" fontSize="h3" >{ title }</StyledTitle>
        <div>
        <p>{ status }</p>
        <StyledButton buttonSize="vSmall" buttonStyle="outline3" onClick={()=> deleteTech(id)}> <FaRegTrashAlt/>  </StyledButton>
        </div>
    </StyledCard>
  )
}

export default CardTech