import React from "react";
import './UserProfile.css';
import axios from 'axios';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      avatar: '',
      history: [],
      comments: []
    };
  }

  componentDidMount() {
  	this.getUserInfo();
  }

  getUserInfo = () => {
    console.log("ID is " + this.props.match.params.id);
  	axios
  	.get('/api/users/' + this.props.match.params.id)
  	.then(res => {
  		console.log(res.data);
  		this.setState({
  			firstName: res.data.firstName,
  			lastName: res.data.lastName,
  			email: res.data.email,
        avatar: res.data.avatar,
        history: res.data.history, // only returns ids
      });
      console.log("History: " + res.data.history)
      this.fetchTitles(res.data.history)
      this.getComments();
  	}) 
  	.catch(err => console.error(err));
  };

  // Need to fix this
  fetchTitles = (movies) => {
    try {
      movies.forEach(async movie => {
        axios
          .get('api/movies/' + movie)
          .then(res => {
            console.log("Movie is "+res.data);
            this.state.history.push(res.data.title);
          });
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Need to fix this
  getComments = () => {
  	axios
  	.get('/api/comments/' + this.props.match.params.id)
  	.then(res => {
  		console.log(res.data);
  		this.setState({
  			comments: res.data
      });
  	}) 
  	.catch(err => console.error(err));
  };

  render() {
    return (
      <div className="UserProfile mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">User Profile</h1>
              <p className="lead text-center mb-4">Your Notflix Account</p>
              <div className="row border rounded profile-card">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                  <img src={this.state.avatar} class="img-fluid mt-4 img-thumbnail"></img>
                </div>
                <div class="col-md">
                  <ul className="lead mt-4 mb-4 font-weight-bold"><h2>{this.state.firstName} {this.state.lastName}</h2></ul>
                  <ul className="lead mb-4">Email: {this.state.email}</ul> 
                  <ul><button type="button" className="btn btn-danger block"><a href="/edit/:id" class="nav-link text-white">Edit Profile</a></button></ul>
                </div>
              </div>
              <div className="row">
                <div class="col-md-6 border rounded">
                  <p className="lead text-center mb-4">History</p>
                  <div className="row">
                    {this.state.history.map(movie => {
                      return (
                        <div class="border rounded">
                          <p className="text-left">{movie}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div class="col-md-6 border rounded">
                  <p className="lead text-center mb-4">Comments</p>
                  <div className="row">
                    {this.state.comments.map(comment => {
                      return (
                        <div class="border rounded">
                          <p className="text-left">{comment}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
