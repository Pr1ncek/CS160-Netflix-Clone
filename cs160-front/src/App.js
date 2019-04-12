import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoComponent from './VideoComponent';
import InformationComponent from './InformationComponent';
import './MoviePage.css';

import axios from 'axios';

class App extends Component {
  state = {
    topTenMovies: []
  };

  componentDidMount() {
    // Fetch the top 10 list of movies
    axios
      .get('/movie')
      .then(res => {
        console.log(res.data);
        this.setState({ topTenMovies: res.data });
      })
      .catch(err => console.error(err));
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
