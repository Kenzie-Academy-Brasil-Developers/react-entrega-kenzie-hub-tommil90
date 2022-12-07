import * as yup from 'yup';


 export const registerTechSchema = yup.object().shape({

    title: yup.string().required("Nome de tech é requerida").min(3, "Nome precisa al menos 3 letras").max(20, "Nome precisa ser menos de 20 letras"),
    status: yup.string().required("Seleccione um módulo")
  })