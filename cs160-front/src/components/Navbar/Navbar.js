import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Searchbar from '../Searchcomponent/searchbar';
 

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
      <li className="nav-item">
          <Link className="nav-link" to="login">
            <img src={require('../../images/AvatarImg.png')} alt="GuestImg" width="30" height="30"  /> 
          </Link>
        </li>
     
     
      </ul>
    );
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link mr-3" to="/myaccount">
            My Account
          </Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-outline-danger px-3 text-white" onClick={this.props.logout}>
            Logout
          </button>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="collapse navbar-collapse container" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-brand" style={{ fontWeight: 900, fontSize: '180%' }}>
              Notflix
            </li>
            <li className="nav-item">
                <Searchbar />
            </li>
            <li className="nav-item ml-4 pt-2">
              <Link className="nav-link" to="/">
                {' '}
                Home
              </Link>
            </li>
          </ul>         
          {this.props.isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
