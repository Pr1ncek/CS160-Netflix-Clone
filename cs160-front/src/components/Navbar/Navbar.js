import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="login">
            Login
          </Link>
        </li>
      </ul>
    );
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <span className="navbar-text mr-3">Prince</span>
        <li className="nav-item">
          <button className="btn btn-outline-danger px-3 text-white">Logout</button>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="collapse navbar-collapse container" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-brand">Notflix</li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {' '}
                Home
              </Link>
            </li>
          </ul>
          {guestLinks}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
