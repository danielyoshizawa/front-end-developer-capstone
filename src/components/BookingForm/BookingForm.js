import './Style.css'
import { Field } from "formik"

function BookingForm() {
  return(
    <section className="booking-form">
      <div>
        <h1>Reservation</h1>
        <p>Want to make a reservation?</p>
      </div>
        <span className="field">
          <label>Name
            <Field
              className="secondary-bg-color-grey"
              name="name"
              placeholder="Name"
              />
          </label>
        </span>
        <span className="field">
          <label>Guests
            <Field
              className="secondary-bg-color-grey"
              name="guests"
              type="number"
              placeholder="# of guests"
              min="1"
              max="10"
            />
          </label>
        </span>
        <span className="field">
          <label>Date
            <Field
              className="secondary-bg-color-grey"
              name="date"
              type="date"
              placeholder="Date"
            />
          </label>
        </span>
        <label>Time
          <Field className="secondary-bg-color-grey" name="time" as="select">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </Field>
        </label>
        <label>Table Placement
          <Field className="secondary-bg-color-grey" name="placement" as="select">
            <option>Indoors</option>
            <option>Outdoors</option>
            <option>Balcone</option>
          </Field>
        </label>
        <label>Comments
          <Field
            className="secondary-bg-color-grey"
            name="comments"
            placeholder="Please tell us anything we should know to make your experience better."
            cols="100"
            component="textarea"
          />
        </label>
    </section>
  )
}

export default BookingForm
