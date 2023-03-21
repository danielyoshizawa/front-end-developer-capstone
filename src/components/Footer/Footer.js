import './Style.css'
import logo from './Images/Logo.svg'

function Footer() {
  return(
    <section className="footer primary-bg-color-green secondary-color-grey">
    <div className="main">
      <div className="image">
        <div className="secondary-bg-color-grey">
        <img src={logo} alt="Little Lemon Restaurant" />
        </div>
      </div>
      <div className="column">
        <ul>
          <li>Doormat</li>
          <li><br /></li>
          <li>Navigation</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Log In</li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li>Contact</li>
          <li><br /></li>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li>Social Media Links</li>
          <li><br /></li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Whatsapp</li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      <p>Copyright &copy;, all rights reserved to Little Lemon</p>
    </div>
    </section>
  )
}

export default Footer
