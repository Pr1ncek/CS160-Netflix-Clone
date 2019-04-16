import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoComponent from './VideoComponent';
import InformationComponent from './InformationComponent';
import './MoviePage.css';
const axios = require("axios");
// import axios from 'axios';

class App extends Component {
  
  state = {
    movie: []
  };

  componentDidMount() {
    // id = 5c919e9dd346841eaf9d1e4b
    console.log("Test")
    axios.get('http://localhost:5000/movie/5c919e9dd346841eaf9d1e4b')
      .then(res => {
        console.log(res.data);
        this.setState({ movie: res.data });
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