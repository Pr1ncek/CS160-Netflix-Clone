import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoComponent from './VideoComponent'
import InformationComponent from './InformationComponent'
import './MoviePage.css'

class App extends Component {
  render() {
    return (
      <div id = "background-color">
      	<div class="videoWrapper">
        	<iframe id="movie" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"> </iframe>
        </div>	
		<InformationComponent /> 
      </div>
    );
  }
}

export default App;
