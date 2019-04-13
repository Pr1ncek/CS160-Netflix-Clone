import React, { Component } from "react";
import { Form, Button, Jumbotron, Row, Col } from 'react-bootstrap';

class Register extends Component {
	submitRegister(e) {}

	render() {
		return (
				<Jumbotron className="form-container">
				<h1 className="text-center">Register</h1>
					<Form>
						<Form.Row>
						<Col>
						<Form.Group controlId="formRegisterFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="Enter First Name"/>
						</Form.Group>
						</Col>

						<Col>	
						<Form.Group controlId="formRegisterLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Enter Last Name"/> 
						</Form.Group>
						</Col>
						</Form.Row>

						<Form.Group controlId="formRegisterUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" placeholder="Enter Username"/> 
						</Form.Group>

						<Form.Group controlId="formRegisterEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder="Enter Email"/> 
						</Form.Group>

						<Form.Group controlId="formRegisterPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Enter Password"/> 
						</Form.Group>
						<Button variant="primary" type="submit" block 
						onClick={this.submitRegister.bind(this)}>
						Create Account
						</Button>
						<Form.Text className="text-muted">Already have an account? <a href="./login">Log In Here</a></Form.Text>
					</Form>
				</Jumbotron>
			);
	}
}
export default Register;
