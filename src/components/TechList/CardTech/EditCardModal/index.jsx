import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { StyledButton } from '../../../../styles/buttons'
import { FormContainer } from '../../../../styles/FormContainer'
import { Spinner } from '../../../../styles/spinner'
import spinner from '../../../../assets/spinner.svg'
import { StyledTitle } from '../../../../styles/typography'
import ModalDefault from '../../../Modal'
import { editTechSchema } from './schema'
import { StyledEditTech } from './style'
import { TechContext } from '../../../../contexts/TechContext'
import { UserContext } from '../../../../contexts/UserContext'

const EditCardModal = ({ id, title, status, setShowModal }) => {

    const { deleteTech, loading, editTech } = useContext( TechContext )
   


    const { register, handleSubmit, formState: { errors }, reset } = useForm({

        resolver: yupResolver(editTechSchema),
        mode: "onChange",
        defaultValues: {
            title: title,
            status: status
        }
    })

    const submit = data => {

        editTech(id, data)
        setShowModal(false)

    }

  return (
    <ModalDefault setShowModal={ setShowModal } >
        <StyledEditTech>
            <div>  
                <StyledTitle tag="h3" fontSize="h3" >Editar tecnología</StyledTitle>
                <StyledButton onClick={()=> setShowModal(false)} buttonSize="vSmall" buttonStyle="outline2" >X</StyledButton> 
            </div>
            <FormContainer>
                <form onSubmit={ handleSubmit(submit) } >
                    <label htmlFor="title">Nome</label>
                    <input type="text" id="title" placeholder="Ex. Typescript" {...register("title")} disabled={true} />
                    { errors.title?.message && <small className="alert" >{ errors.title.message }</small> }

                    <label htmlFor="status">Selecionar status</label>
                    <select  id="status" {...register("status")} >
                        <option value="">Status...</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    { errors.status?.message && <small className="alert" >{ errors.status.message }</small> }

                    <StyledButton type="submit" buttonSize="default" buttonStyle="solidPrimary" >{ loading ? <Spinner src={spinner} alt="spinner" /> : "Editar tecnologia" }</StyledButton>

                </form>

                <StyledButton onClick={() => deleteTech(id)}buttonSize="default" buttonStyle="outline1">Excluir</StyledButton>
            </FormContainer>
        </StyledEditTech>
    </ModalDefault>
  )
}

export default EditCardModal

