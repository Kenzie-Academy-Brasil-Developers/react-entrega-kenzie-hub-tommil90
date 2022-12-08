import * as yup from 'yup';


 export const editTechSchema = yup.object().shape({

    status: yup.string().required("Seleccione um módulo")
  })