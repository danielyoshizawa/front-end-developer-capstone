import './Style.css';
import logo from './Logo.svg';
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="font-karla">
      <img src={logo} alt="Little Lemon Logo"/>
      <ul>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="#About">ABOUT</NavLink></li>
        <li><NavLink to="#Menu">MENU</NavLink></li>
        <li><NavLink to="/reservation">RESERVATIONS</NavLink></li>
        <li><NavLink to="/order_online">ORDER ONLINE</NavLink></li>
        <li><NavLink to="/login">LOG IN</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav
