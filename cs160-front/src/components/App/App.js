import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    topTenMovies: []
  };

  componentDidMount() {
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
      <div className="container pt-5 mt-5">
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default App;
