import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Union</h1>
          <p className="lead">
            Let's create our strong community
          </p>
          {/* <div className="buttons">
            <Link to="/register" className="btn btn-secondary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Home;