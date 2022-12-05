
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { StyledHeader } from './style'

const Header = ({ user }) => {

    const { name, course_module } = user

  return (
    <StyledHeader>
        <h2>{`Olá, ${ name }`}</h2>
        <p>{ course_module }</p>
    </StyledHeader>
  )
}

export default Header