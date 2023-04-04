import './Style.css'
import { Field } from "formik"
import { useState } from 'react'
import { fetchAPI } from '../../helpers/FakeApi'

function BookingForm(props) {
  const formik = props.formik
  const [times, setTimes] = useState(initializeTimes(formik.getFieldProps("date").value))

  function initializeTimes(date) {
    return fetchAPI(new Date(date))
  }

  function updateTimes(date) {
    setTimes(initializeTimes(date))
  }

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
              type="text"
              onChange={formik.onChange}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="error">{formik.errors.name}</div>
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
              onChange={formik.onChange}
            />
            {formik.errors.guests && formik.touched.guests ? (
              <div className="error">{formik.errors.guests}</div>
            ) : null }
          </label>
        </span>
        <span className="field">
          <label>Date
            <Field
              className="secondary-bg-color-grey"
              name="date"
              type="date"
              onChange={e => {
                updateTimes(e.target.value)
                formik.setFieldValue("date", e.target.value)
              }}
            />
            {formik.errors.date && formik.touched.date ? (
              <div className="error">{formik.errors.date}</div>
            ) : null }
          </label>
        </span>
        <label>Time
          <Field className="secondary-bg-color-grey" name="time" as="select">
            { times.map((item) =>
              <option key={item} value={item}>{item}</option>
            )}
          </Field>
          {formik.errors.time && formik.touched.time ? (
            <div className="error">{formik.errors.time}</div>
          ) : null }
        </label>
        <label>Table Placement
          <Field className="secondary-bg-color-grey" name="placement" as="select">
            <option>Indoors</option>
            <option>Outdoors</option>
            <option>Balcone</option>
          </Field>
          {formik.errors.placement && formik.touched.placement ? (
            <div className="error">{formik.errors.placement}</div>
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
          {formik.errors.comments && formik.touched.comments ? (
            <div className="error">{formik.errors.comments}</div>
          ) : null }
        </label>
    </section>
  )
}

export default BookingForm
