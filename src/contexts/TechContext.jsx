import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify"
import { api } from "../services/api"
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export const TechProvider = ({ children }) =>{

    const { setShowModal } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    async function createTech(data){

        const token = localStorage.getItem("@kenzieHub:TOKEN")
        

        try {
            setLoading(true)
            const response = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setShowModal(false)
            toast.success("Nova tech cadastrada com sucesso")
           
        } catch (error) {
            toast.error("Tech já foi cadastrada")
        } finally {
            setLoading(false)
        }

    }


    async function editTech(id, data){

        const token = localStorage.getItem("@kenzieHub:TOKEN")
       
        try {
    
            const response = await api.put(`/users/techs/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success("Tech editada com sucesso")
           
        } catch (error) {
            console.log(error)
        } finally {

        }

    }

    async function deleteTech(id){

        const token = localStorage.getItem("@kenzieHub:TOKEN")
       
        try {
    
            const response = await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success("Tech apagada com sucesso")
           
        } catch (error) {
            console.log(error)
        } finally {

        }
    }

    return(

        <TechContext.Provider value={{ createTech, loading, editTech, deleteTech }} >  
            { children }
        </TechContext.Provider>
    )
}