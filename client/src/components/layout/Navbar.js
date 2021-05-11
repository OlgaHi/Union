import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <h1><Link className="navbar-brand" to="/">
          <img
            src="https://cdn.pixabay.com/photo/2020/10/23/14/42/handshake-5678931__340.png"
            width="11%"
            className="d-inline-block align-top"
            alt="logo"
            loading="lazy"
          ></img><strong>Union</strong></Link></h1>
      <ul>
        <li>
          <Link to="/profiles">Neighbors</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;