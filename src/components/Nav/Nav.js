import './Style.css';
import logo from './Logo.svg';
import CustomNavLink from './CustomNavLink'

function Nav() {
  return (
    <nav className="font-karla">
      <img src={logo} alt="Little Lemon Logo"/>
      <ul>
        <li><CustomNavLink to="/">HOME</CustomNavLink></li>
        <li><CustomNavLink to="/about">ABOUT</CustomNavLink></li>
        <li><CustomNavLink to="/menu">MENU</CustomNavLink></li>
        <li><CustomNavLink to="/reservation">RESERVATIONS</CustomNavLink></li>
        <li><CustomNavLink to="/order_online">ORDER ONLINE</CustomNavLink></li>
        <li><CustomNavLink to="/login">LOG IN</CustomNavLink></li>
      </ul>
    </nav>
  )
}

export default Nav
