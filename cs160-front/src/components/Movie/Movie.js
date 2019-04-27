import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';

class Movie extends Component {
  state = {
    movie: {},
    movieImage: ''
  };

  componentDidMount() {
    axios
      .get(`/api/movies/searchbyid/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ movie: res.data }, () => {
          this.getMovieImage(this.state.movie);
        });
      })
      .catch(err => console.error(err));
  }

  getMovieImage = async movie => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=d3174f7b933d2334bd229b8535a3cf3c`
        )
        .then(res => {
          this.setState({ movieImage: res.data.poster_path });
          console.log(res.data.poster_path);
        });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { movie, movieImage } = this.state;
    console.log(movie.title);
    return (
      <div className="container" style={{ marginTop: '7%' }}>
        <div className="row">
          <div className="col-4">
            <img
              onError={this.imagesFailedToLoad}
              src={`https://image.tmdb.org/t/p/w500/${movieImage}`}
              className="card-img-top"
              alt={movie.title}
            />
          </div>
          <div className="col-8">
            <h1 className="display-5 pb-2 pt-4">{movie.title}</h1>
            <p className="lead">{movie.overview}</p>
            <p>
              Released:<strong> {movie.release_date}</strong>
            </p>
            <p>
              Rating:<strong> {movie.vote_average}</strong>
            </p>
          </div>
        </div>
        <Comments />
      </div>
    );
  }
}

export default Movie;
