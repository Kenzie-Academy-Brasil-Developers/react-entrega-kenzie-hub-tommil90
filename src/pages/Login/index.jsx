import React, { useState } from 'react'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Logo from '../../assets/Logo.svg'
import { FormContainer } from '../../styles/FormContainer'
import { MainLogin } from './style'
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { StyledButton } from '../../styles/buttons';
import { StyledTitle } from '../../styles/typography';
import { Spinner } from '../../styles/spinner';
import spinner from '../../assets/spinner.svg'
import { toast } from 'react-toastify';




const Login = () => {

  const navigate = useNavigate() 
  const [loading, serLoading] = useState(false)

  const loginSchema = yup.object().shape({

    email: yup.string().required("Precisa um Email cadastrado").email("escibir mail en formato correto"), 
    password: yup.string().required("Senha é requerida")

  })  

  const { register, handleSubmit, formState: { errors } } = useForm({

    resolver: yupResolver(loginSchema)
  })

  const onSubmitFunction = data => {

   

    async function loginUser(){
        
      try {

        serLoading(true)
        const response = await api.post("/sessions", data)
        console.log(response.data.user.id)
        if(response.status === 200){
          const token  = response.data.token
          const userId = response.data.user.id
          
          localStorage.setItem("@TOKEN", JSON.stringify(token))
          localStorage.setItem("@USERID", JSON.stringify(userId))

          toast.success(`Bem-vindo ${response.data.user.name}`)
          setTimeout(()=> {
            navigate("/home")
          }, 3000)

        }else{
          toast.error("Email ou pass inválido, tente novamente")
        }
        
      } catch (error) {
        // console.log(!!error.response.data.message)

        if(!!error.response.data.message){
          toast.error("Email ou pass inválido, tente novamente")
        }
      }finally{
        serLoading(false)
      }
    }

    loginUser()
  }

const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  return (
    <MainLogin>
   
        <img src={Logo} alt="Kenzie Hub" /> 
        
        

        <FormContainer>
       
           <StyledTitle tag="h2" fontSize="h2" >Login</StyledTitle>

            <form  onSubmit={handleSubmit(onSubmitFunction)}>

            <label htmlFor="email" >Email</label>   
            <input placeholder="Digite seu Email" id="email" {...register("email")} />
            { errors.email?.message && <small  className="alert">{ errors.email.message }</small> }


            <label htmlFor="password<" >Senha</label> 
            <input placeholder="Digite sua senha" id="password<"  {...register("password")} />
            { errors.password?.message && <small  className="alert">{ errors.password.message }</small> }
    

            <StyledButton type="submit" buttonSize="default" buttonStyle="solidPrimary" >{ !loading ? "Entrar" : <Spinner src={spinner} alt="spinner" />  }</StyledButton>

            </form>

            <p>Ainda não possui uma conta?</p>
            <StyledButton onClick={() => navigate("/Register")}buttonSize="default" buttonStyle="outline1">Cadastre-se</StyledButton>

        </FormContainer>


 
    </MainLogin>
  )
}

export default Login



/*
<Spinner src={spinner} alt="spinner" />  
*/