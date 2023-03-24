import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'
import BookingForm from '../BookingForm/BookingForm'
import OccasionMenu from '../OccasionMenu/OccasionMenu'
import Payment from '../Payment/Payment'
import { useState } from 'react'

function Reservation() {
  const [formData, setFormData] = useState([])
  const [formInputData, setFormInputData] = useState({
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
  })
  const handleInputChange = (ev) => {
    const inputFieldValue = ev.target.value
    const inputFieldName = ev.target.name
    const newInputValue = {...formInputData, [inputFieldName]: inputFieldValue}
    setFormInputData(newInputValue)
  }

  const handleFormSubmit = (ev) => {
    ev.preventDefault()
    console.log(formInputData)
  }

  return(
    <Layout>
      <Hero />
      <form onSubmit={handleFormSubmit}>
        <BookingForm handleInputChange={handleInputChange} />
        <OccasionMenu handleInputChange={handleInputChange} />
        <Payment handleInputChange={handleInputChange} />
      </form>
    </Layout>
  )
}

export default Reservation
