import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Loader from '../Loader/Loader';

class App extends Component {
  state = {
    top50Movies: [],
    moviePosters: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('/api/movies/topmovies')
      .then(res => {
        console.log(res.data);
        this.setState({ top50Movies: res.data });
        this.setState({ isLoaded: true });
        // this.getMoviePosters(res.data);
      })
      .catch(err => console.error(err));
  }

  getMoviePosters = movies => {
    try {
      movies.forEach(async movie => {
        let posterPath = '';
        await axios
          .get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=d3174f7b933d2334bd229b8535a3cf3c`)
          .then(res => {
            posterPath = res.data.results[0].poster_path;
            this.setState(prevState => ({
              moviePosters: { ...prevState.moviePosters, [movie.title]: posterPath }
            }));
          });
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoaded: true });
    }
  };

  render() {
    const { isLoaded, top50Movies, moviePosters } = this.state;
    if (!isLoaded)
      return (
        <div class="d-flex justify-content-center" style={{ marginTop: '370px' }}>
          <div class="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    return (
      <div className="pt-5" style={{ paddingLeft: '8.5%', marginTop: '70px' }}>
        <div className="row">
          {isLoaded &&
            top50Movies.map(movie => {
              return (
                <div
                  key={movie.id}
                  className="card movie-card"
                  style={{ width: '18rem', margin: '10px', marginBottom: '70px', paddingBottom: '1%' }}
                >
                  {/* <img
                    src={`https://image.tmdb.org/t/p/w500/${moviePosters[movie.title]}`}
                    className="card-img-top"
                    alt={movie.title}
                  /> */}
                  <div className="black-box">
                    <h4 className="pl-2 pr-2">{movie.title}</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Released:<strong> {movie.release_date}</strong>
                    </p>
                    <p className="card-text pb-2">
                      Rating:<strong> {movie.vote_average}</strong>
                    </p>
                    <button className="btn btn-danger w-100">Play</button>
                  </div>
                </div>
              );
            })}
        </div>
        <div style={{ paddingLeft: '40%', paddingBottom: '3%' }}>
          <button className="btn btn-dark pl-5 pr-5">Load More</button>{' '}
        </div>
      </div>
    );
  }
}

export default App;
