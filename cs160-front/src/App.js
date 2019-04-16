import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoComponent from './VideoComponent';
import InformationComponent from './InformationComponent';
import './MoviePage.css';
import axios from 'axios';
import setAuthToken from './set-auth-token';
import jwt_decode from 'jwt-decode';

const checkAuthenticationStatus = () => {
  // check for token
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    // check for expiration
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // logic to logout user
    }
    return decoded;
  }
  return false;
};

class App extends Component {
  state = {
    topTenMovies: [],
    currentUser: {}
  };

  componentDidMount() {
    axios
      .get('/movie')
      .then(res => {
        console.log(res.data);
        this.setState({ topTenMovies: res.data });
      })
      .catch(err => console.error(err));

    const currentUser = checkAuthenticationStatus();
    if (currentUser) this.setState({ currentUser });
  }

  render() {
    return (
      <div id="background-color">
        <div class="videoWrapper">
          <iframe id="movie" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
            {' '}
          </iframe>
        </div>
        <InformationComponent />
      </div>
    );
  }
}

export default App;
