
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import { StyledHeader } from './style'

const Header = () => {

    const { user } = useContext(AuthContext)
    const { name, course_module } = user

  return (
    <StyledHeader>
        <h2>{`Olá, ${ name }`}</h2>
        <p>{ course_module }</p>
    </StyledHeader>
  )
}

export default Header