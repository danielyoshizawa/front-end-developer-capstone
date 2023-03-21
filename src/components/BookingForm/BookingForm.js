import './Style.css'

function BookingForm() {
  return(
    <section className="booking-form">
      <div>
        <h1>Reservation</h1>
        <p>Want to make a reservation?</p>
      </div>
      <form>
        <span className="field">
          <label>Name
            <input className="secondary-bg-color-grey" type="text" placeholder="name"/>
          </label>
        </span>
        <span className="field">
          <label>Guests
            <input className="secondary-bg-color-grey" type="number" placeholder="# of guests" min="1" max="10"/>
          </label>
        </span>
        <span className="field">
          <label>Date
            <input className="secondary-bg-color-grey" type="date" placeholder="Date" />
          </label>
        </span>
        <label>Time
          <select className="secondary-bg-color-grey">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </label>
        <label>Table Placement
          <select className="secondary-bg-color-grey">
            <option>Indoors</option>
            <option>Outdoors</option>
            <option>Balcone</option>
          </select>
        </label>
        <label>Comments
          <textarea className="secondary-bg-color-grey" placeholder="Please tell us anything we should know to make your experience better." cols="100" />
        </label>
      </form>
    </section>
  )
}

export default BookingForm
