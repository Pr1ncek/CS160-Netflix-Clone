import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//Testing Again

class App extends Component {
  state = {
    top50Movies: [],
    topActionMovies: [],
    topComedyMovies: [],
    topHorrorMovies: [],
    moviePosters: {},
    isLoaded: false,
    imagesLoaded: true,
    currentPage: 0
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    axios
      .get('/api/movies/topmovies')
      .then(res => {
        this.setState({ top50Movies: res.data, isLoaded: true });
        this.getMoviePosters(res.data);
      })
      .catch(err => console.error(err));
  };

  getMoviePosters = movies => {
    try {
      movies.forEach(async movie => {
        await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=d3174f7b933d2334bd229b8535a3cf3c`)
          .then(res => {
            this.setState(prevState => ({
              moviePosters: { ...prevState.moviePosters, [movie.title]: res.data.poster_path }
            }));
          });
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoaded: true });
    }
  };

  imagesFailedToLoad = () => this.setState({ imagesLoaded: false });

  previousPage = () => {
    if (this.state.currentPage !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }));
    }
  };

  nextPage = () => {
    if (this.state.currentPage !== 4) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
    }
  };

  render() {
    const { isLoaded, top50Movies, moviePosters, imagesLoaded, currentPage } = this.state;
    if (!isLoaded)
      return (
        <div className="d-flex justify-content-center" style={{ marginTop: '370px' }}>
          <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );

    return (
      <div className="pt-5 " style={{ marginTop: '70px', paddingLeft: '7%' }}>
        <div className="row" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {isLoaded &&
            top50Movies.slice(currentPage * 12, currentPage * 12 + 12).map(movie => {
              return (
                <div
                  key={movie.id}
                  className="card movie-card"
                  style={{ width: '18rem', margin: '10px', marginBottom: '70px', paddingBottom: '1%' }}
                >
                  {!imagesLoaded || moviePosters[movie.title] === undefined ? (
                    <div className="black-box">
                      <h4 className="pl-2 pr-2">{movie.title}</h4>
                    </div>
                  ) : (
                      <img
                        style={{ height: '400px' }}
                        onError={this.imagesFailedToLoad}
                        src={`https://image.tmdb.org/t/p/w500/${moviePosters[movie.title]}`}
                        className="card-img-top"
                        alt={movie.title}
                      />
                    )}
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
        <div style={{ width: '500px', paddingBottom: '3%', marginLeft: 'auto', marginRight: 'auto' }}>
          {currentPage > 0 && (
            <button onClick={this.previousPage} className="btn btn-dark pl-5 pr-5">
              Previous Page
            </button>
          )}
          <button onClick={this.nextPage} className="btn btn-dark pl-5 pr-5 ml-3">
            Next Page
          </button>{' '}
        </div>
      </div>
    );
  }
}


export default App;
