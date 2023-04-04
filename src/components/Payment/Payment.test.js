import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Payment from './Payment'
import ErrorBoundary from '../../helpers/ErrorBoundary'
import { Formik, Form } from "formik"
import ValidationSchema from '../Reservation/ValidationSchema'

test('Payment Form', async () => {
  render(
    <ErrorBoundary>
      <Formik
        validationSchema={ValidationSchema}
      >
      {formik =>
        <Form>
          <Payment formik={formik} />
        </Form>
      }
      </Formik>
    </ErrorBoundary>
  )

  const user = userEvent.setup()

  // Map of form fields
  const inputField = new Map([
    ['payment', screen.getByText("Payment")],
    ['ccName', screen.getByLabelText("Name")],
    ['ccNumber', screen.getByLabelText("Card Number")],
    ['ccCode', screen.getByLabelText("Security Code")],
    ['ccDate', screen.getByLabelText("Expiration Date")]
  ])

  const requiredFields = new Map([
    ['ccName', 'John Doe'],
    ['ccNumber', 1234123412341234],
    ['ccCode', 123],
    ['ccDate', '06/06/2036'],
  ])

  // Checking if all form fields were rendered
  inputField.forEach((item) => {
    expect(item).toBeInTheDocument()
  })

  // Test Validation
  requiredFields.forEach((item, key, map) => {
    user.type(inputField.get(key), item)
    waitFor(() => expect(screen.getByText(/is a required field$/i)).not())
    userEvent.clear(inputField.get(key))
    waitFor(() => expect(screen.getByText(/is a required field$/i)))
  })
})
