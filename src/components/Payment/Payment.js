import './Style.css'
import { Field } from "formik"
import creditCard from './Images/CreditCard.png'

function Payment(props) {
  const formik = props.formik

  return(
    <div className="payment">
      <div className="struct">
        <div className="form">
          <>
            <h1>Payment</h1>
            <h2>Please, fill your credit card information</h2>
          </>
          <>
            <label>Name
              <Field
                className="secondary-bg-color-grey"
                name="ccName"
                type="text"
                placeholder="Name"
              />
              {formik.errors.ccName && formik.touched.ccName ? (
                <div className="error">{formik.errors.ccName}</div>
              ) : null }
            </label>
            <label>Card Number
              <Field
                className="secondary-bg-color-grey"
                name="ccNumber"
                type="number"
                placeholder="Card Number"
              />
              {formik.errors.ccNumber && formik.touched.ccNumber ? (
                <div className="error">{formik.errors.ccNumber}</div>
              ) : null }
            </label>
            <label>Security Code
              <Field
                className="secondary-bg-color-grey"
                name="ccCode"
                type="number"
                placeholder="Security Code"
              />
              {formik.errors.ccCode && formik.touched.ccCode ? (
                <div className="error">{formik.errors.ccCode}</div>
              ) : null }
            </label>
            <label>Expiration Date
              <Field
                className="secondary-bg-color-grey"
                name="ccDate"
                type="date"
                placeholder="Expiration Date"
              />
              {formik.errors.ccDate && formik.touched.ccDate ? (
                <div className="error">{formik.errors.ccDate}</div>
              ) : null }
            </label>
          </>
          <>
            <h2>Total</h2>
            <h2>$39.99</h2>
          </>
        </div>
        <div className="credit-card">
          <img src={creditCard} alt="Credit Card" />
        </div>
      </div>
      <div className="button">
        <button
          className="primary-bg-color-yellow primary-color-green"
          name="submit"
          type="submit"
          onClick={ formik.handleFormSubmit }
        >
          Make Reservation
        </button>
      </div>
    </div>
  )
}

export default Payment
