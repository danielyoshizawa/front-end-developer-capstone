import { NavLink } from 'react-router-dom'
import './Style.css'

function CustomNavLink(props) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive, isPending }) =>
        isPending ? "secondary-bg-color-white primary-color-green" :
        isActive  ? "primary-bg-color-green secondary-color-grey" :
        ""
      }
    >
      {props.children}
    </NavLink>
  )
}

export default CustomNavLink
