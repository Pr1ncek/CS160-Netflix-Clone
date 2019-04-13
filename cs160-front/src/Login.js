import React, { Component } from 'react';
import { Form, Button, Jumbotron } from 'react-bootstrap';
import './Style.css'


class Login extends Component {
	submitLogin(e) {}
	render() {
		return (
			<Jumbotron className="form-container">
			<h1 className="text-center">Log In</h1>
				<Form>
					<Form.Group controlId="formLoginUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control type="username" placeholder="Enter Username"/>
					</Form.Group>

					<Form.Group controlId="formLoginPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter Password"/>
					</Form.Group>
					<Button variant="primary" type="submit" block
					onClick={this.submitLogin.bind(this)}>Submit</Button>
					<Form.Text className="text-muted">Don't have an account? <a href="./register">Register Here</a></Form.Text>

				</Form>
			</Jumbotron>
			);
	}
}
export default Login;