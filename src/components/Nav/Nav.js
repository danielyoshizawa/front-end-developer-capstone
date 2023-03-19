import './Style.css';
import logo from './Logo.svg';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="font-karla">
      <img src={logo} alt="Little Lemon Logo"/>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="#About">ABOUT</Link></li>
        <li><Link to="#Menu">MENU</Link></li>
        <li><Link to="/reservation">RESERVATIONS</Link></li>
        <li><Link to="/order_online">ORDER ONLINE</Link></li>
        <li><Link to="/login">LOG IN</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
