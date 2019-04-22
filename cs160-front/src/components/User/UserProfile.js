import React, { Component } from "react";

class UserProfile extends React.Component {
  render() {
    const { currentUser} = this.props;
    return (
      <div className="UserProfile mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-8 text-center">User Profile</h1>
              <p className="lead text-center mb-4">Your Notflix Account</p>
              <div className="row border rounded">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                  <img src={currentUser.avatar} class="img-fluid mt-4"></img>
                  <a href="/EditProfile" class="nav-link ml-4">Edit Profile</a>
                </div>
                <div class="col-md">
                  <ul className="lead mt-4 mb-4">Name: {currentUser.firstName} {currentUser.lastName}</ul>
                  <ul className="lead mb-4">Email: {currentUser.email}</ul>  
                </div>
              </div>
              <div className="row">
                <div class="col-md-6 border rounded">
                  <p className="lead text-center mb-4">History</p>
                  {/* <p className="text-left ml-2 ">{currentUser.history}</p> */}
                </div>
                <div class="col-md-6 border rounded">
                  <p className="lead text-center mb-4">Comments</p>
                  {/* <p className="text-left ml-2">{currentUser.comments}</p> */}
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