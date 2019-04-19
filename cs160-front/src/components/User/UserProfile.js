import React, { Component } from "react";

class UserProfile extends React.Component {
  render() {
    const { isAuthenticated, currentUser} = this.props;
    return (
      <div className="UserProfile mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-8 text-center">User Profile</h1>
              <p className="lead text-center mb-4">Your Notflix Account</p>
              <div className="row">
                <div class="col-md-4">
                  <img src={currentUser.avatar} class="img-fluid"></img>
                </div>
                <div class="col-md-8">
                  <ul className="lead mb-4">Name: {currentUser.firstName} {currentUser.lastName}</ul>
                  <ul className="lead mb-4">Email: {currentUser.email}</ul>  
                </div>
              </div>
              <div class="container text-left ml-4">
                <a href="/EditProfile" class="nav-link">Edit Profile</a>
              </div>             
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a class="nav-item nav-link active" id="nav-hist-tab" data-toggle="tab" href="#nav-hist" role="tab" aria-controls="nav-hist" aria-selected="true">History</a>
                  <a class="nav-item nav-link" id="nav-coms-tab" data-toggle="tab" href="#nav-coms" role="tab" aria-controls="nav-coms" aria-selected="false">Comments</a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-hist" role="tabpanel" aria-labelledby="nav-hist-tab">...</div>
                <div class="tab-pane fade" id="nav-coms" role="tabpanel" aria-labelledby="nav-coms-tab">...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;