import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    topTenMovies: [],
    moviePosters: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('/movie')
      .then(res => {
        console.log(res.data);
        this.setState({ topTenMovies: res.data });
        this.getMoviePosters(res.data);
      })
      .catch(err => console.error(err));
  }

  getMoviePosters = movies => {
    try {
      movies.forEach(async movie => {
        let posterPath = '';
        await axios
          .get(
            `http://api.themoviedb.org/3/search/movie?api_key=d3174f7b933d2334bd229b8535a3cf3c&query=${
              movie.title
            }`
          )
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

  showMovieInfo = movie => {};

  render() {
    const { isLoaded, topTenMovies, moviePosters } = this.state;
    return (
      <div className="pt-5 mt-5" style={{ paddingLeft: '8.5%' }}>
        <div className="row">
          {isLoaded &&
            topTenMovies.map(movie => {
              return (
                <div
                  onMouseEnter={() => this.showMovieInfo(movie)}
                  key={movie.id}
                  className="card movie-card"
                  style={{ width: '18rem', margin: '10px', marginBottom: '15px', paddingBottom: '1%' }}
                >
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${moviePosters[movie.title]}`}
                    className="card-img-top"
                    alt="movie poster"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Released:<strong> {movie.release_date}</strong>
                    </p>
                    <p className="card-text">
                      Rating:<strong> {movie.vote_average}</strong>
                    </p>
                    <button className="btn btn-primary w-100">Play</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
