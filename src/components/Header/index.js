import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="navbar1">
    <li className="logo-header-container1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="logo-image1"
        alt="wave"
      />
      <p>Wave</p>
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
)

export default Header
