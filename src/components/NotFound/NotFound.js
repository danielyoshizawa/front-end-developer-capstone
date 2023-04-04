import Hero from '../Hero/Hero'
import './Style.css'

function NotFound() {
  return(
    <>
      <Hero />
      <div className="not-found">
        <h1>Ops! Nothing here yet.</h1>
        <h2>Checkout our other pages while we work on this part of the page.</h2>
      </div>
    </>
  )
}

export default NotFound
