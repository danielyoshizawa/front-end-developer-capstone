import './Style.css'
import { Field } from "formik"
import creditCard from './Images/CreditCard.png'

function Payment() {
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
            </label>
            <label>Card Number
              <Field
                className="secondary-bg-color-grey"
                name="ccNumber"
                type="number"
                placeholder="Card Number"
              />
            </label>
            <label>Security Code
              <Field
                className="secondary-bg-color-grey"
                name="ccCode"
                type="number"
                placeholder="Security Code"
              />
            </label>
            <label>Expiration Date
              <Field
                className="secondary-bg-color-grey"
                name="ccDate"
                type="date"
                placeholder="Expiration Date"
              />
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
        >
          Make Reservation
        </button>
      </div>
    </div>
  )
}

export default Payment
