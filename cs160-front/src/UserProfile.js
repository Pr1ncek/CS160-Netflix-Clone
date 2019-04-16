import React, { Component } from "react";
import { Image, Tab, Tabs, Container, Row, Col, ListGroup } from 'react-bootstrap';
import blankPhoto from "./images/AvatarImg.png";
import "./Style.css";
const axios = require("axios");

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

class UserProfile extends React.Component {
  state = {
    user: {},
    history: [],
    comments: []
  };

  componentDidMount() {
    // Fetch the top 10 list of movies
    axios.get('/user')
      .then(res =>{
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
    <Container>
      <Row>
        <Col sm={5} md={4} lg={3}>
        <Avatar
          image={user.basicInfo.photo}/>
          <p className="text-center">
          <a href="./edit-profile">Edit Profile</a>
          </p>
        </Col>
        <Col sm={7} md={8} lg={9}>
        <h3>{user.basicInfo.username}</h3>
        <p className="text-muted">{user.basicInfo.firstName} {user.basicInfo.lastName}</p>
        <p className="text-muted">{user.basicInfo.email}</p>
        </Col>
      </Row>
      <Tabs defaultActiveKey="history" id="uncontrolled-tab-example">
        <Tab eventKey="history" title="History">
          <ListGroup>
            <ListGroup.Item>Movie 1</ListGroup.Item> 
            <ListGroup.Item>Movie 2</ListGroup.Item> 
            <ListGroup.Item>Movie 3</ListGroup.Item> 
          </ListGroup>
        </Tab>
        <Tab eventKey="comments" title="Comments">
        <ListGroup>
            <ListGroup.Item>Comment 1</ListGroup.Item> 
            <ListGroup.Item>Comment 2</ListGroup.Item> 
            <ListGroup.Item>Comment 3</ListGroup.Item> 
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
    );
  }
}

export default UserProfile;