import React, { Component } from "react";
import { Form, Button, Jumbotron, Image, Row, Col } from 'react-bootstrap';
import blankPhoto from "./images/AvatarImg.png";
import "./Style.css";
import axios from 'axios';

var user = {
  basicInfo: {
    firstName: "Abed",
    lastName: "Nadir",
    username: "brownjoey",
    email: "abed.nadir@greendale.com",
    photo: blankPhoto,
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
        <Image src={this.props.image} thumbnail/> 
    );
  }
}

class EditProfile extends Component {
	state = {
    user: {}
  };

  componentDidMount() {
    axios.get('/user')
      .then(res =>{
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch(err => console.error(err));
  }

  submitEdit(e) {}
	cancelEdit(e) {}
  render() {
    return(
      	<Jumbotron className="form-container">
					<Row>
          <Col sm={5} md={4} lg={3}>
            <Avatar
              image={user.basicInfo.photo}/>
              <p className="text-center">
              <a href="./EditProfile">Change Picture</a>
              </p>
          </Col>
        </Row>
				<h1 className="text-center">Edit Profile</h1>
					<Form>
						<Form.Row>
						<Col>
						<Form.Group controlId="formEditFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder={user.basicInfo.firstName}/>
						</Form.Group>
						</Col>

						<Col>	
						<Form.Group controlId="formEditLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder={user.basicInfo.lastName}/> 
						</Form.Group>
						</Col>
						</Form.Row>

						<Form.Group controlId="formEditEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder={user.basicInfo.email}/> 
						</Form.Group>

						<Form.Group controlId="formEditPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Change Password"/> 
						</Form.Group>

						<Button variant="primary" type="submit" block 
						onClick={this.submitEdit.bind(this)}>
						Update
						</Button>

						<Button variant="primary" type="submit" block 
						onClick={this.cancelEdit.bind(this)}>
						Cancel
						</Button>

					</Form>
				</Jumbotron>
    );
  }
}

export default EditProfile;