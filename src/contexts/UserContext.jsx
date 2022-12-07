import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";


export const UserContext = createContext({})

// const { Provider } = Context

export const UserProvider = ({ children }) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)

    async function registerUser(data){

        try {
            
            setLoading(true)
            const response = await api.post("/users", data)
            
            if(response.status === 201){

                toast.success("Usuario Cadastrado com sucesso")
      
                navigate("/Login")
              }

        } catch (error) {
            console.log(error)
        if(error){
          toast.error("Email já foi cadastrado")
          }
        }
    }

    return (
        <UserContext.Provider value={{ registerUser, loading, showModal, setShowModal }} >

            { children }

        </UserContext.Provider>
    )
}