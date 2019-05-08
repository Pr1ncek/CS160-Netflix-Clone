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
  
  constructor () {
    super();
    this.state = {
      movie: [],
      comments: []
    };
  }


  componentDidMount() {
    // id = 5c919e9dd346841eaf9d1e4b
    console.log("Test")
    Promise.all([
      axios.get('/api/movies/searchbyid?id=5c919e9dd346841eaf9d1e4b'), /* this.props.location.query._id */
      axios.get('/api/comments/getMovieComments?id=5c919e9dd346841eaf9d1e4b')
      ])
        .then(([movieResponse, commentsResponse]) => {
          console.log(movieResponse.data);
          console.log(commentsResponse.data);
          this.setState({ movie: movieResponse.data, comments: commentsResponse.data.comment });
        })
        .catch(err => console.error(err));
  }

  render() {
    /*
    var commentArray = this.state.comments.comment;
    var comments = commentArray.map((comment) => {
      return (
        <CommentComponent author={this.state.comments.user} text={this.state.comments.text} />
        );
    })

    /*
    console.log(this.state.comments);
    var comments = this.state.comments.length > 0 ? this.state.comments.comment.map((comment) => {
      return (
        <CommentComponent author={this.state.comments.user} text={this.state.comments.text} />
      );
    })

    
    var comments => {
        return (
          for each (var comment in this.state.comments.comment) {
            <CommentComponent author={this.state.comments.user} text={this.state.comments.text} />
          })
    }
    console.log(this.state.comments.comment)

  

    var comments => {
      return (
        for each (var comment in this.state.comments.comment) {
          <CommentComponent author={this.state.comments.user} text={this.state.comments.text} />
        })
    }
    
    console.log(comments)

    
*/

    var comments = this.state.comments.map((comment) => {
      return (
        <CommentComponent firstName={comment.user.firstName} lastName={comment.user.lastName} text={comment.text} />
        );
    });

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
            <div id = 'child'>
             {comments}
            </div>
          </div>
          <CommentPostComponent id={'5c919e9dd346841eaf9d1e4b'} user={this.props.currentUser}/>
        </div>
      </div>
    );
  }
}

export default App;