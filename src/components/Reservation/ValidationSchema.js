import * as Yup from 'yup'

const ValidationSchema = Yup.object({
  name      : Yup.string().required(),
  guests    : Yup.number().min(1).max(10).required(),
  date      : Yup.date().required(),
  time      : Yup.string().required(),
  placement : Yup.string(),
  comments  : Yup.string(),
  occasion  : Yup.string(),
  ccName    : Yup.string().required(),
  ccNumber  : Yup.number().required(),
  ccCode    : Yup.number().min(3).required(),
  ccDate    : Yup.date().required(),
})

export default ValidationSchema
