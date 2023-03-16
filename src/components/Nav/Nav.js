import './Style.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <img src="" alt=""/>
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
