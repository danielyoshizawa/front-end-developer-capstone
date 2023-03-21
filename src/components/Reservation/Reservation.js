import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'
import BookingForm from '../BookingForm/BookingForm'
import OccasionMenu from '../OccasionMenu/OccasionMenu'
import Payment from '../Payment/Payment'

function Reservation() {
  return(
    <Layout>
      <Hero />
      <BookingForm />
      <OccasionMenu />
      <Payment />
    </Layout>
  )
}

export default Reservation
