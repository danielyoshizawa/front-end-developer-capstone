import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'
import BookingForm from '../BookingForm/BookingForm'
import OccasionMenu from '../OccasionMenu/OccasionMenu'
import Payment from '../Payment/Payment'
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import './Style.css'

const validationSchema = Yup.object({
  name      : Yup.string().required(),
  guests    : Yup.number().min(1).max(10).required(),
  date      : Yup.date().required(),
  time      : Yup.string().required(),
  placement : Yup.string(),
  comments  : Yup.string(),
  occasion  : Yup.string(),
  ccName    : Yup.string().required(),
  ccNumber  : Yup.number().required(),
  ccCode    : Yup.number().min(3).max(4).required(),
  ccDate    : Yup.date().required(),
})

function Reservation() {
  const today = new Date().toISOString().split('T')[0]
  const formInputData = {
    name      : '',
    guests    : '1',
    date      : today,
    time      : '19:00',
    placement : 'Indoors',
    comments  : '',
    occasion  : '',
    ccName    : '',
    ccNumber  : '',
    ccCode    : '',
    ccDate    : '',
  }

  const handleFormSubmit = (values) => {
    // ev.preventDefault()
    console.log(values)
  }

  return(
    <Layout>
      <Hero />
      <Formik
        initialValues={formInputData}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {formik => (
          <Form>
            <BookingForm formik={formik} />
            <OccasionMenu formik={formik} />
            <Payment formik={formik} />
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default Reservation
