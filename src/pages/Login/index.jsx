import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Logo from '../../assets/Logo.svg'
import { FormContainer } from '../../styles/FormContainer'
import { MainLogin } from './style'
import { StyledButton } from '../../styles/buttons';
import { StyledTitle } from '../../styles/typography';
import { Spinner } from '../../styles/spinner';
import spinner from '../../assets/spinner.svg'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { loginSchema } from './schemaLogin';
import { useNavigate } from "react-router-dom";





const Login = () => {

  const navigate = useNavigate()
  const { onSubmitLogin, loading } = useContext(AuthContext)
 

  const { register, handleSubmit, formState: { errors } } = useForm({

    resolver: yupResolver(loginSchema)
  })


  return (
    <MainLogin>
   
        <img src={Logo} alt="Kenzie Hub" /> 
        
        

        <FormContainer>
       
           <StyledTitle tag="h2" fontSize="h2" >Login</StyledTitle>

            <form  onSubmit={handleSubmit(onSubmitLogin)}>

            <label htmlFor="email" >Email</label>   
            <input type="text" placeholder="Digite seu Email" id="email" {...register("email")} />
            { errors.email?.message && <small  className="alert">{ errors.email.message }</small> }


            <label htmlFor="password<" >Senha</label> 
            <input  type="password" placeholder="Digite sua senha" id="password<"  {...register("password")} />
            { errors.password?.message && <small  className="alert">{ errors.password.message }</small> }
    

            <StyledButton type="submit" buttonSize="default" buttonStyle="solidPrimary" disabled ={loading} >{ !loading ? "Entrar" : <Spinner src={spinner} alt="spinner" />  }</StyledButton>

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

/*
  const onSubmitLogin = data => {

    async function loginUser(){
        
      try {

        setLoading(true)
        const response = await api.post("/sessions", data)
  
        if(response.status === 200){
          const token  = response.data.token
          const userId = response.data.user.id
          const name = response.data.user.name
          
          localStorage.setItem("@TOKEN", JSON.stringify(token))
          localStorage.setItem("@USERID", JSON.stringify(userId))

          toast.success(`Bem-vindo ${ name }`)
          setTimeout(()=> {
            navigate(`/home/${ name }`)
          }, 1000)

        }else{
          toast.error("Email ou pass inválido, tente novamente")
        }
        
      } catch (error) {
        // console.log(!!error.response.data.message)

        if(!!error.response.data.message){
          toast.error("Email ou pass inválido, tente novamente")
        }
      }finally{
        setLoading(false)
      }
    }

    loginUser()
  }
  */