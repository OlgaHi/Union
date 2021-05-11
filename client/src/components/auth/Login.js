import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  
  return (
    <Fragment>
      <h1 className="large text">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form">
        <div className="form-group">
          <input 
          type="email" 
          placeholder="Email Address"
          name="email" 
          required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  )
}

export default Login;
