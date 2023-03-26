import './Style.css'
import { Field } from "formik"

function BookingForm(props) {
  const {errors, touched} = props.validation
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
              required
              />
              {errors.name && touched.name ? (
                <div className="error">{errors.name}</div>
              ) : null }
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
              required
            />
            {errors.guests && touched.guests ? (
              <div className="error">{errors.guests}</div>
            ) : null }
          </label>
        </span>
        <span className="field">
          <label>Date
            <Field
              className="secondary-bg-color-grey"
              name="date"
              type="date"
              placeholder="Date"
              required
            />
            {errors.date && touched.date ? (
              <div className="error">{errors.date}</div>
            ) : null }
          </label>
        </span>
        <label>Time
          <Field className="secondary-bg-color-grey" name="time" as="select" required>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </Field>
          {errors.time && touched.time ? (
            <div className="error">{errors.time}</div>
          ) : null }
        </label>
        <label>Table Placement
          <Field className="secondary-bg-color-grey" name="placement" as="select">
            <option>Indoors</option>
            <option>Outdoors</option>
            <option>Balcone</option>
          </Field>
          {errors.placement && touched.placement ? (
            <div className="error">{errors.placement}</div>
          ) : null }
        </label>
        <label>Comments
          <Field
            className="secondary-bg-color-grey"
            name="comments"
            placeholder="Please tell us anything we should know to make your experience better."
            cols="100"
            component="textarea"
          />
          {errors.comments && touched.comments ? (
            <div className="error">{errors.comments}</div>
          ) : null }
        </label>
    </section>
  )
}

export default BookingForm
