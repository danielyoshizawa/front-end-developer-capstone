import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'
import BookingForm from '../BookingForm/BookingForm'
import OccasionMenu from '../OccasionMenu/OccasionMenu'
import Payment from '../Payment/Payment'
import { Formik, Form } from "formik"

function Reservation() {
  const formInputData = {
    name      : '',
    guests    : '',
    date      : '',
    time      : '',
    placement : '',
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
        onSubmit={handleFormSubmit}
      >
        <Form>
          <BookingForm />
          <OccasionMenu />
          <Payment />
        </Form>
      </Formik>
    </Layout>
  )
}

export default Reservation
