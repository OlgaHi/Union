import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading}, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles"><i className="fas fa-users"></i>{" "}Neighbors</Link>
      </li>
      <li>
        <Link to="/posts"><i className="fas fa-stream"></i>{" "}Posts</Link>
      </li>
      <li>
        <a onClick={logout} href="#!"><i className="fas fa-sign-out-alt"></i>{" "}Logout</a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles"><i className="fas fa-users"></i>{" "}Neighbors</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>  
    </ul>
  )

  return (
    <nav className="navbar">
      <h1><Link className="navbar-brand" to="/">
          <img
            src="https://cdn.pixabay.com/photo/2020/10/23/14/42/handshake-5678931__340.png"
            width="11%"
            className="d-inline-block align-top"
            alt="logo"
            loading="lazy"
          ></img>Union</Link>
      </h1>
      { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>)}

    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);