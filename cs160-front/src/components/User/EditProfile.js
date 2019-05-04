import React, { Component } from "react";
import "./Style.css";
import axios from 'axios';
import './EditProfile.css';
//import avatarImg from './images/AvatarImg.png'


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      currentPassword: '',
      newPassword: '',
      avatar: ''
    };
  }


  componentDidMount() {
  	console.log("ID is " + this.props.match.params.id);
  	axios
  	.get('/api/users/' + this.props.match.params.id)
  	.then(res => {
  		console.log(res.data);
  		this.setState({
  			firstName: res.data.firstName,
  			lastName: res.data.lastName,
  			email: res.data.email,
  			avatar: res.data.avatar
  		});
  	}) 
  	.catch(err => console.error(err));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onInfoSubmit = e => {
  	e.preventDefault();

  	const { firstName, lastName, email, password } = this.state;
  	axios
  	.put('/api/users/' + this.props.match.params.id + '/update', { firstName, lastName, email, password })
  	.then(res => {
  		console.log(res.data);
      this.props.history.push('/UserProfile/' + this.props.match.params.id)
  	});
  };

  onPasswordSubmit = e => {
    this.props.history.push('/UserProfile/' + this.props.match.params.id)
  };

    render() {
    const { currentUser } = this.props;
    return(
      <div className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Profile</h1>
              <p className="lead text-center mb-4">Edit your Notflix profile</p>
              <form noValidate onSubmit={this.onInfoSubmit}>
                <div className="text-center">
                  <img src={this.state.avatar} className="img-thumbnail small-img-box"></img>
                </div>
                    <div className="form-group mt-3">
                      <input 
                      className="form-control"
                      placeholder="Paste image URL"
                      type="text"
                      name="avatar"
                      value={this.state.avatar}
                      onChange={this.onChange}
                  />
                  </div>
                <div className="form-group">
                  <input 
                  className="form-control"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input 
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input 
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  />
                </div>

                <input type="submit" className="btn btn-danger btn-block mt-4"/>
                </form>

                <hr className="hr-danger"/>

                <form noValidate onSubmit={this.onPasswordSubmit}>
                <p className="lead text-center mb-4">Reset your Notflix password</p>

                <div className="form-group">
                  <input 
                  className="form-control"
                  type="password"
                  placeholder="Current Password"
                  name="currentPassword"
                  value={this.state.currentPassword}
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
               <input type="submit" className="btn btn-danger btn-block mt-4"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
