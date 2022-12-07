import * as yup from 'yup';

export const loginSchema = yup.object().shape({

    email: yup.string().required("Precisa um Email cadastrado").email("escibir mail en formato correto"), 
    password: yup.string().required("Senha é requerida")

  })  