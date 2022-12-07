import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    
    const navigate = useNavigate() 
    const [user, setUser] = useState(null)
    const [verification, setVerification] = useState(true)
    const [loading, setLoading] = useState(false)

  
  useEffect(()=> {

    async function loadUser(){

        const token = localStorage.getItem("@kenzieHub:TOKEN")
        

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

            setUser(data)
        } catch (error) {
            localStorage.removeItem("@kenzieHub:TOKEN")
            localStorage.removeItem("@kenzieHub:USERID")
        } finally {
            setVerification(false)
        }

    } 
    loadUser()
  }, [user])

   async function onSubmitLogin (data)  {


    try {
        
        setLoading(true)
        const response = await api.post("/sessions", data)

        //Ex. const { user: userResponde } = response
  
        if(response.status === 200){
            const token  = response.data.token
            const userId = response.data.user.id
            const name = response.data.user.name
            
            localStorage.setItem("@kenzieHub:TOKEN",token)
            localStorage.setItem("@kenzieHub:USERID", userId)

            setUser(response.data.user)
  
            toast.success(`Bem-vindo ${ name }`)
            navigate(`/home/${ name }`)
  
          }else{
            toast.error("Email ou pass inválido, tente novamente")
          }
        
      } catch (error) {
        //console.log(!!error.response.data.message)

        if(!!error.response.data.message){
            toast.error("Email ou pass inválido, tente novamente")
        }
      }finally{
        setLoading(false)
      }
   }



    return(

        <AuthContext.Provider value={{ onSubmitLogin, loading, user, verification }} >  
            { children }
        </AuthContext.Provider>
    )
}