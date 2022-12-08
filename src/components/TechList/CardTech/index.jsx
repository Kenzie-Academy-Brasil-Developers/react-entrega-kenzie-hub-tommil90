import React from 'react'
import { StyledButton } from '../../../styles/buttons'
import { StyledTitle } from '../../../styles/typography'
import { StyledCard } from './style'
import { FaEdit } from 'react-icons/fa';
import EditCardModal from './EditCardModal';
import { useState } from 'react';


const CardTech = ({ title, status, id }) => {


  const [ showModal, setShowModal ] = useState(false)

  return (
    <StyledCard>
        <StyledTitle tag="h3" fontSize="h3" >{ title }</StyledTitle>
        <div>
        <p>{ status }</p>
        <StyledButton buttonSize="vSmall" buttonStyle="outline3" onClick={()=> setShowModal(true)}> <FaEdit/>  </StyledButton>
        </div>
        { showModal && <EditCardModal id={id} title={title} status={status} setShowModal={setShowModal} /> }
    </StyledCard>
  )
}

export default CardTech