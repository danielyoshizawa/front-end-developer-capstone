import { render, screen } from "@testing-library/react"
import ConfirmedBooking from './ConfirmedBooking'
import ErrorBoundary from '../../helpers/ErrorBoundary'

test('Renders the ConfirmedBooking heading', async () => {
  render(
    <ErrorBoundary>
      <ConfirmedBooking />
    </ErrorBoundary>
  )
  expect(screen.getByText("Reservation Confirmed")).toBeInTheDocument()
})
