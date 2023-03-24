import './Style.css'

function BookingForm({handleInputChange}) {
  return(
    <section className="booking-form">
      <div>
        <h1>Reservation</h1>
        <p>Want to make a reservation?</p>
      </div>
        <span className="field">
          <label>Name
            <input
              className="secondary-bg-color-grey"
              name="name"
              type="text"
              placeholder="name"
              onChange={handleInputChange}
              />
          </label>
        </span>
        <span className="field">
          <label>Guests
            <input
              className="secondary-bg-color-grey"
              name="guests"
              type="number"
              placeholder="# of guests"
              min="1"
              max="10"
              onChange={handleInputChange}
            />
          </label>
        </span>
        <span className="field">
          <label>Date
            <input
              className="secondary-bg-color-grey"
              name="date"
              type="date"
              placeholder="Date"
              onChange={handleInputChange}
            />
          </label>
        </span>
        <label>Time
          <select className="secondary-bg-color-grey" name="time" onChange={handleInputChange}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </label>
        <label>Table Placement
          <select className="secondary-bg-color-grey" name="placement" onChange={handleInputChange}>
            <option>Indoors</option>
            <option>Outdoors</option>
            <option>Balcone</option>
          </select>
        </label>
        <label>Comments
          <textarea
            className="secondary-bg-color-grey"
            name="comments"
            placeholder="Please tell us anything we should know to make your experience better."
            cols="100"
            onChange={handleInputChange}
          />
        </label>
    </section>
  )
}

export default BookingForm
