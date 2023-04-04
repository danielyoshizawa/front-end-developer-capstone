import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import BookingForm from '../BookingForm/BookingForm'
import OccasionMenu from '../OccasionMenu/OccasionMenu'
import Payment from '../Payment/Payment'
import ErrorBoundary from '../../helpers/ErrorBoundary'
import { Formik, Form } from "formik"
import {expect, jest, test} from '@jest/globals'

test('Form Submition', async () => {
  const handleSubmit = jest.fn()
  render(
    <ErrorBoundary>
      <Formik
        onSubmit={handleSubmit}
      >
      {formik =>
        <Form>
          <BookingForm formik={formik} />
          <OccasionMenu formik={formik} />
          <Payment formik={formik} />
        </Form>
      }
      </Formik>
    </ErrorBoundary>
  )

  const user = userEvent.setup()

  // Map of form fields
  const inputField = new Map([
    ['name', screen.getAllByLabelText("Name")[0]],
    ['guests', screen.getByLabelText("Guests")],
    ['date', screen.getByLabelText("Date")],
    ['time', screen.getByLabelText("Time")],
    ['placement', screen.getByLabelText("Table Placement")],
    ['comments', screen.getByLabelText("Comments")],
    ['occasion', screen.getByRole("combobox", { name : "" })],
    ['ccName', screen.getAllByLabelText("Name")[1]],
    ['ccNumber', screen.getByLabelText("Card Number")],
    ['ccCode', screen.getByLabelText("Security Code")],
    ['ccDate', screen.getByLabelText("Expiration Date")]
  ])

  const fieldValues = new Map([
    ['name', 'John Doe'],
    ['guests', "4"],
    ['date', '2036-06-06'],
    ['comments', 'We are alergic to peanuts'],
    ['occasion', 'Engagement'],
    ['ccName', 'John Doe'],
    ['ccNumber', "1234123412341234"],
    ['ccCode', "123"],
    ['ccDate', '2036-06-06']
  ])

  // Setting fields
  fieldValues.forEach( async (item, key) => {
    await waitFor(() => {
      fireEvent.click(inputField.get(key), { target: { value: item }})
      expect(inputField.get(key).value).toBe(item)
    })
  })

  // Tests if the handleSubmit is called
  const submitBt = screen.getByRole('button', {label: 'On Click'})
  await waitFor(() => {
    user.click(submitBt)
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
