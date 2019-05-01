import React, { Component } from 'react';
import './App.css';
import VideoComponent from './VideoComponent';
import InformationComponent from './InformationComponent';
import CommentComponent from './CommentComponent'
import CommentPostComponent from './CommentPostComponent'
import './MoviePage.css';
const axios = require("axios");
// import axios from 'axios';

class App extends Component {
  
  state = {
    movie: [],
    comments: []
  };

  componentDidMount() {
    // id = 5c919e9dd346841eaf9d1e4b
    console.log("Test")
    Promise.all([
      axios.get('/api/movies/searchbyid?id=5c919e9dd346841eaf9d1e4b'),
      axios.get('/api/comments/getMovieComments?id=5c919e9dd346841eaf9d1e4b')
      ])
        .then(([movieResponse, commentsResponse]) => {
          console.log(movieResponse.data);
          console.log(commentsResponse.data);
          this.setState({ movie: movieResponse.data, comments: commentsResponse.data });
        })
        .catch(err => console.error(err));
  }

  render() {
    return (
      <div class="mb-2 bg-dark text-white">
        <div class="videoWrapper">
          <iframe id="movie" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
            {' '}
          </iframe>
        </div>
        <div id="information">
          <InformationComponent title={this.state.movie.title} description={this.state.movie.overview}/>
          <br />
          Comments
          <div id = "comments">          
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
          </div>
          <CommentPostComponent id={this.state.movie._id} user={this.props.user}/>
        </div>
      </div>
    );
  }
}

export default App;