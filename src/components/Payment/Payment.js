import './Style.css'
import creditCard from './Images/CreditCard.png'

function Payment({handleInputChange}) {
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
              <input
                className="secondary-bg-color-grey"
                name="ccName"
                type="text"
                placeholder="Name"
                onChange={handleInputChange}
              />
            </label>
            <label>Card Number
              <input
                className="secondary-bg-color-grey"
                name="ccNumber"
                type="number"
                placeholder="Card Number"
                onChange={handleInputChange}
              />
            </label>
            <label>Security Code
              <input
                className="secondary-bg-color-grey"
                name="ccCode"
                type="number"
                placeholder="Security Code"
                onChange={handleInputChange}
              />
            </label>
            <label>Expiration Date
              <input
                className="secondary-bg-color-grey"
                name="ccDate"
                type="date"
                placeholder="Expiration Date"
                onChange={handleInputChange}
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
        <input
          className="primary-bg-color-yellow primary-color-green"
          name="submit"
          type="submit"
          value="Make Reservation"
        />
      </div>
    </div>
  )
}

export default Payment
