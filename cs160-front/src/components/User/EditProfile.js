import React, { Component } from "react";
import "./Style.css";
import axios from 'axios';
//import avatarImg from './images/AvatarImg.png'


var user = {
  basicInfo: {
    firstName: "Abed",
    lastName: "Nadir",
    username: "brownjoey",
    email: "abed.nadir@greendale.com",
    //photo: blankPhoto,
  }
}


class Avatar extends React.Component {
  render() {
    var image = this.props.image,
        style = {
          width: 50,
          height: 50
        }; 
    
    if (!image) return null;
    
    return (
        <img src={this.props.image} class="img-thumbnail"/> 
    );
  }
}

class EditProfile extends Component {
	state = {
    user: {}
  };


  submitEdit(e) {}
	cancelEdit(e) {}

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isAuthenticated, currentUser } = this.props;
    return(
      <div className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Profile</h1>
              <p className="lead text-center mb-4">Edit your Notflix profile</p>
              <div className="row">
              <div className="col-md-4">
              <img src={currentUser.avatar} className="img-thumbnail"></img>
              <p className="lead text-center mb-4">Edit Avatar</p>
              </div>
              <div className="col-md-8">
              <form>
                <div className="form-group">
                  <input 
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={currentUser.firstName}
                  onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input 
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={currentUser.lastName}
                  onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input 
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={currentUser.email}
                  onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input 
                  className="form-control"
                  type="password"
                  placeholder="Current Password"
                  name="currentPassword"
                  value={this.state.password}
                  onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input 
                  className="form-control"
                  type="password"
                  placeholder="New Password"
                  name="newPassword"
                  value={this.state.newPassword}
                  onChange={this.onChange}
                  />
                </div>
              <button type="button" className="btn btn-danger btn-block mt-4">Update Profile</button>
              </form>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;