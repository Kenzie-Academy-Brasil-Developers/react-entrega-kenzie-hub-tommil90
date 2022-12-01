
import React, { useState } from 'react'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoaderData, useNavigate } from 'react-router-dom'
import { FormContainer } from '../../styles/FormContainer'
import { MainRegister } from './style'
import { StyledTitle } from '../../styles/typography';
import Logo from '../../assets/Logo.svg'
import { StyledButton } from '../../styles/buttons';
import { api } from '../../services/api';
import { Spinner } from '../../styles/spinner';
import spinner from '../../assets/spinner.svg'
import { toast } from 'react-toastify';

const Register = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const registerSchema = yup.object().shape({

    name: yup.string().required("Nome é requerido").min(3, "Nome precisa al menos 3 letras").max(20, "Nome precisa ser menos de 20 letras"),
    email: yup.string().required("Email é requerido").email("escibir mail en formato correto"),
    password: yup.string().required("Senha é requerida").min(6, " Senha precisa ser de al menos 8 caractéres").matches(/(?=.*?[A-Z])/, "Sua senha precisa uma letra maiúscula"),
    repeatPassword: yup.string().required("Senha é requerida").min(6, " Senha precisa ser de al menos 8 caractéres").matches(/(?=.*?[A-Z])/, "Sua senha precisa uma letra maiúscula").oneOf([yup.ref("password")], "As senhas não são iguais"),
    bio: yup.string().required("Bio é requerida").max(20, "Bio máximo 20 caracteres"),
    contact: yup.string().required("Indique algúm Contato"),
    course_module: yup.string().required("Seleccione um módulo"),


  })
   

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
  
      resolver: yupResolver(registerSchema),
      mode: "onChange",
         
  })

  const submit = data => {
    
    console.log(data)
    reset()

    async function registerUser(){
        
      try {

        setLoading(true)
        const response = await api.post("/users", data)
     

        if(response.status === 201){

          toast.success("Usuario Cadastrado com sucesso")

          setTimeout(()=> {
            navigate("/Login")
          }, 3000)
        }
        
        
      } catch (error) {
        console.log(error)
        if(error){
          toast.error("Email já foi cadastrado")
        }
    
      }finally{
        setLoading(false)
      }
    }

    registerUser()
 
  }

  return (
    <MainRegister>

        <header>
            <img src={Logo} alt="Kenzie Hub" />
            <StyledButton onClick={() => navigate("/")} buttonSize="small" buttonStyle="outline2">Voltar</StyledButton>
    
        </header>

        <FormContainer>
            <StyledTitle tag="h2" fontSize="h2" >Crie sua conta</StyledTitle>
            <p>Rapido e grátis, vamos nessa</p>

            <form onSubmit={ handleSubmit(submit)  }>

            <label htmlFor="name" >Nome</label>   
            <input type="text" placeholder="Digite aqui seu nome" id="name" {...register("name")} />
            { errors.name?.message && <small className="alert" >{ errors.name.message }</small> }
            


            <label htmlFor="email<" >Email</label> 
            <input type="email"  placeholder="Digite aqui seu email" id="email" {...register("email")}  />
            { errors.email?.message && <small className="alert" >{ errors.email.message }</small> }



            <label htmlFor="password" >Senha</label> 
            <input type="password"  placeholder="Digite aqui sua Senha" id="password" {...register("password")}  />
            { errors.password?.message && <small className="alert" >{ errors.password.message }</small> }



            <label htmlFor="password-confirm" >Confirmar Senha</label> 
            <input type="password" placeholder="Confirme aqui sua senha" id="password-confirm" {...register("repeatPassword")}  />
            { errors.repeatPassword?.message && <small className="alert" >{ errors.repeatPassword.message }</small> }
    

            <label htmlFor="bio" >Bio</label> 
            <input type="text" placeholder="Fale sobre você" id="bio"  {...register("bio")} />
            { errors.bio?.message && <small className="alert" >{ errors.bio.message }</small> }
         



            <label htmlFor="contato" >Contato</label> 
            <input type="text" placeholder="Opção de contato" id="contato"  {...register("contact")} />
            { errors.contact?.message && <small className="alert" >{ errors.contact.message }</small> }

            <label htmlFor="modulo<" >Seleccione módulo</label> 
            <select id="modulo" {...register("course_module")} >
                <option value="">Seleccione módulo</option>
                <option value="Primeiro módulo(Introdução ao HTML, JS e CSS)">Primeiro módulo(Introdução ao HTML, JS e CSS)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>

            </select>
            { errors.course_module?.message && <small className="alert" >{ errors.course_module.message }</small> }

            <StyledButton type="submit" buttonSize="default" buttonStyle="solidPrimary" >{ !loading ? "Cadastrar" : <Spinner src={spinner} alt="spinner" />  }</StyledButton>
            </form>

        </FormContainer>

    </MainRegister>
  )
}

export default Register