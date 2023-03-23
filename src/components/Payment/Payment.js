import './Style.css'
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
              <input className="secondary-bg-color-grey" type="text" placeholder="Name" />
            </label>
            <label>Card Number
              <input className="secondary-bg-color-grey" type="number" placeholder="Card Number" />
            </label>
            <label>Security Code
              <input className="secondary-bg-color-grey" type="number" placeholder="Security Code" />
            </label>
            <label>Expiration Date
              <input className="secondary-bg-color-grey" type="date" placeholder="Expiration Date" />
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
        <input className="primary-bg-color-yellow primary-color-green" type="submit" value="Make Reservation" />
      </div>
    </div>
  )
}

export default Payment
