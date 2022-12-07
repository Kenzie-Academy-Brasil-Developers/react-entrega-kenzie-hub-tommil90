import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import CardTech from './CardTech'
import { StyledTechList } from './style'

const TechList = () => {

  const { user } = useContext(AuthContext)

  const techs = user.techs


  return (
    <StyledTechList>
        {
          techs.map(({ id, title, status }) => <CardTech key={id} title={title} status={status} id={id} />)
        }
    </StyledTechList>
  )
}

export default TechList

