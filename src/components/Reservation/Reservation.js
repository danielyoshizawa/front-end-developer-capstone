import Hero from '../Hero/Hero'
import BookingForm from '../BookingForm/BookingForm'
import OccasionMenu from '../OccasionMenu/OccasionMenu'
import Payment from '../Payment/Payment'
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import './Style.css'
import { submitAPI } from '../../helpers/FakeApi'
import ValidationSchema from './ValidationSchema'

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
  const navigate = useNavigate()

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmation")
    }
  }

  const handleFormSubmit = (values) => {
    submitForm(values)
  }

  return(
    <>
      <Hero />
      <Formik
        initialValues={formInputData}
        validationSchema={ValidationSchema}
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
    </>
  )
}

export default Reservation
