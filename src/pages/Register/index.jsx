
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import { FormContainer } from '../../styles/FormContainer'
import { MainRegister } from './style'
import { StyledTitle } from '../../styles/typography';
import Logo from '../../assets/Logo.svg'
import { StyledButton } from '../../styles/buttons';
import { Spinner } from '../../styles/spinner';
import spinner from '../../assets/spinner.svg'
import { registerSchema } from './schema';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Register = () => {

  const navigate = useNavigate()
  const { registerUser, loading } = useContext(UserContext)
  

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
  
      resolver: yupResolver(registerSchema),
      mode: "onChange",
         
  })

  const submit = data => {
    

    reset()
    registerUser(data)

   
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

