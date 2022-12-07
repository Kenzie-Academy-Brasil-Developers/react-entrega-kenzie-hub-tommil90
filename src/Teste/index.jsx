import React, { useEffect } from 'react'
import { api } from '../services/api'

const Teste = () => {

useEffect(()=>{

    async function test (){

        const token1 =  localStorage.getItem('@token:TOKEN')
        api.defaults.headers.authorization = `Bearer ${token1}`
        api
        .get("/profile")
        .then(res => console.log(res))
       


        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzAzNTI3MTUsImV4cCI6MTY3MDYxMTkxNSwic3ViIjoiODQ4ZDMwZDgtZTQzMC00MTEzLTg2ZWMtZTllYjQzYTVlMjA2In0.6RjXzDjcCWdxe_no4QvKqcQphkoypqkyabE6KZnsQ6E'
        console.log(token1)
       

        // try {
        //     const response = await api.get("/profile", {
        //         headers: {
        //             Authorization: `Bearer ${token}`
        //         }
        //     })

        //     console.log(response)
        // } catch (error) {
        //     console.log(error)
        // }

    }
    test()
}, [])

  return (
    <div>Teste</div>
  )
}

export default Teste

/*
    useEffect(()=> {

        async function loadUser(){
    
            const token = localStorage.getItem("@TOKEN")
            
    
            if (!token){
                setVerification(false)
                return
            }
    
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(data)
                // setUser(data)
            } catch (error) {
                
            } finally {
                setVerification(false)
            }
    
        } 
        loadUser()
      }, [])
      */