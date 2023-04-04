import Hero from '../Hero/Hero'
import './Style.css'

function ConfirmedBooking() {
  return (
    <>
      <Hero />
        <div className="confirmation">
          <h1>Reservation Confirmed</h1>
          <h2>We are waiting for you at our little restaurant</h2>
        </div>
    </>
  )
}

export default ConfirmedBooking
