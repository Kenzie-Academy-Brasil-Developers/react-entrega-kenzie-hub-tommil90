
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechContext } from '../../contexts/TechContext'
import { UserContext } from '../../contexts/UserContext'
import { StyledButton } from '../../styles/buttons'
import { FormContainer } from '../../styles/FormContainer'
import { Spinner } from '../../styles/spinner'
import spinner from '../../assets/spinner.svg'
import { StyledTitle } from '../../styles/typography'
import ModalDefault from '../Modal'
import { registerTechSchema } from './schema'
import { StyledCreateTech } from './style'

const CreateTechModal = () => {

    const { createTech, loading } = useContext(TechContext)
    const { setShowModal } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({

        resolver: yupResolver(registerTechSchema),
        mode: "onChange"
    })

    const submit = data => {

        createTech(data)


    }

  return (
    <ModalDefault setShowModal={ setShowModal }>
        <StyledCreateTech>
            <div>  
                <StyledTitle tag="h3" fontSize="h3" >Cadastrar Tecnología</StyledTitle>
                <StyledButton onClick={()=> setShowModal(false)} buttonSize="vSmall" buttonStyle="outline2" >X</StyledButton> 
            </div>
            <FormContainer>
                <form onSubmit={ handleSubmit(submit) } >
                    <label htmlFor="title">Nome</label>
                    <input type="text" id="title" placeholder="Ex. Typescript" {...register("title")} />
                    { errors.title?.message && <small className="alert" >{ errors.title.message }</small> }

                    <label htmlFor="status">Selecionar status</label>
                    <select  id="status" {...register("status")} >
                        <option value="">Status...</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    { errors.status?.message && <small className="alert" >{ errors.status.message }</small> }


                    <StyledButton type="submit" buttonSize="default" buttonStyle="solidPrimary" >{ loading ? <Spinner src={spinner} alt="spinner" /> : "Cadastrar tecnologia" }</StyledButton> 
                </form>
            </FormContainer>
        </StyledCreateTech>
    </ModalDefault>
  )
}

export default CreateTechModal