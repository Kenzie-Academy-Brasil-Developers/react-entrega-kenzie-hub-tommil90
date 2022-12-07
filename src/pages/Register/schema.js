import * as yup from 'yup';


 export const registerSchema = yup.object().shape({

    name: yup.string().required("Nome é requerido").min(3, "Nome precisa al menos 3 letras").max(20, "Nome precisa ser menos de 20 letras"),
    email: yup.string().required("Email é requerido").email("escibir mail en formato correto"),
    password: yup.string().required("Senha é requerida").min(6, " Senha precisa ser de al menos 8 caractéres").matches(/(?=.*?[A-Z])/, "Sua senha precisa uma letra maiúscula"),
    repeatPassword: yup.string().required("Senha é requerida").min(6, " Senha precisa ser de al menos 8 caractéres").matches(/(?=.*?[A-Z])/, "Sua senha precisa uma letra maiúscula").oneOf([yup.ref("password")], "As senhas não são iguais"),
    bio: yup.string().required("Bio é requerida").max(20, "Bio máximo 20 caracteres"),
    contact: yup.string().required("Indique algúm Contato"),
    course_module: yup.string().required("Seleccione um módulo"),
  })