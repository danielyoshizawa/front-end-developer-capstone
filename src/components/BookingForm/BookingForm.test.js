import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import BookingForm from './BookingForm'
import ErrorBoundary from '../../helpers/ErrorBoundary'
import { Formik, Form } from "formik"
import ValidationSchema from '../Reservation/ValidationSchema'

test('Renders the BookingForm', async () => {
  render(
      <Formik
        validationSchema={ValidationSchema}
        onChange={() => {}}
      >
      {formik =>
        <Form onChange={()=>{}}>
          <BookingForm formik={formik} />
        </Form>
      }
      </Formik>
  )
  const user = userEvent.setup()

  // Map of form fields
  const inputField = new Map([
    ['reservation', screen.getByText("Reservation")],
    ['name', screen.getByLabelText("Name")],
    ['guests', screen.getByLabelText("Guests")],
    ['date', screen.getByLabelText("Date")],
    ['time', screen.getByLabelText("Time")],
    ['placement', screen.getByLabelText("Table Placement")],
    ['comments', screen.getByLabelText("Comments")],
  ])

  // Checking if all form fields were rendered
  inputField.forEach(async (item) => {
    await waitFor(() => expect(item).toBeInTheDocument())
  })

  // Tests name input
  let name = screen.getByRole("textbox", { name : "Name"} )
  await waitFor(() => {
    user.clear(name)
    user.type(name, "John Doe")
  })
  await waitFor(() => {
    expect(name.value).toEqual("John Doe")
  })
  // Tests validation message to not be displayed
  await waitFor(() => {
    expect(screen.queryByText(/is a required field$/i)).toBeNull()
  })

  // Tests guest input
  let guests = screen.getByRole("spinbutton", { name : "Guests"} )
  await waitFor(() => {
    user.clear(guests)
    user.type(guests, "3")
  })
  await waitFor(() => {
    expect(guests.value).toEqual("3")
  })
  // Tests validation message
  await waitFor(() => {
    user.clear(guests)
  })
  await waitFor(() => {
    expect(screen.queryByText(/is a required field$/i)).toBeInTheDocument()
  })
})
