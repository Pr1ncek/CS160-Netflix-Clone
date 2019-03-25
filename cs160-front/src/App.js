import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoComponent from './VideoComponent'
import InformationComponent from './InformationComponent'

class App extends Component {
  render() {
    return (
      <div>
        <VideoComponent />
        <InformationComponent /> 
      </div>
    );
  }
}

export default App;
