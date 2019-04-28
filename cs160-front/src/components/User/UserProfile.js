import React, { Component } from "react";
import './UserProfile.css';
import axios from 'axios';
class UserProfile extends React.Component {
  state = {
    comments: []
  };

  componentDidMount() {
    axios
      .get('/api/comments', this.props.currentUser._id)
      .then(res => {
        console.log(res.data);
        this.setState({ comments: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { currentUser} = this.props;
    const { comments } = this.state
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
                  <img src={currentUser.avatar} class="img-fluid mt-4 img-thumbnail"></img>
                </div>
                <div class="col-md">
                  <ul className="lead mt-4 mb-4 font-weight-bold"><h2>{currentUser.firstName} {currentUser.lastName}</h2></ul>
                  <ul className="lead mb-4">Email: {currentUser.email}</ul> 
                  <ul><button type="button" className="btn btn-danger block"><a href="/EditProfile" class="nav-link text-white">Edit Profile</a></button></ul>
                </div>
              </div>
              <div className="row">
                <div class="col-md-4 border rounded">
                  <p className="lead text-center mb-4">History</p>
                  <div className="row">
                    {currentUser.history.map(movie => {
                      return (
                        <div class="border rounded">
                          <p className="text-left">{movie}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div class="col-md-4 border rounded">
                  <p className="lead text-center mb-4">Favorites</p>
                  <div className="row">
                    {currentUser.favorites.map(movie => {
                      return (
                        <div class="border rounded">
                          <p className="text-left">{movie}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div class="col-md-4 border rounded">
                  <p className="lead text-center mb-4">Comments</p>
                  <div className="row">
                    {comments.map(comment => {
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
