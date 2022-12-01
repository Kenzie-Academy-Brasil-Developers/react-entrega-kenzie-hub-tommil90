
import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { StyledHeader } from './style'

const Header = () => {

    const [user, setUser] = useState({})

    const { name, course_module } = user


    useEffect(() => {

        async function getDataUser(){
            
            try {
                
                const userID = JSON.parse(localStorage.getItem("@USERID"))

                const response = await api.get(`/users/${userID}`)

             
                if(response.status === 200){
                    
                    setUser(response.data)
                }

            } catch (error) {
                console.log(error)
            }

        }    
        getDataUser()
    }, [])

  return (
    <StyledHeader>
        <h2>{`Olá, ${ name }`}</h2>
        <p>{ course_module }</p>
    </StyledHeader>
  )
}

export default Header