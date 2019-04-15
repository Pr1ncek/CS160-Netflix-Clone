import React, { Component } from 'react';
import { Form, Button, Jumbotron } from 'react-bootstrap';
import { Route, NavLink, HashRouter, Link } from 'react-router-dom';
import './Style.css'


class Login extends Component {
	submitLogin(e) {}
	render() {
		return (
			<HashRouter>
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
					<Button variant="primary" type="submit" className="color-sevilla" block
					onClick={this.submitLogin.bind(this)}>Submit</Button>
					<Form.Text className="text-muted">Don't have an account? <Link to="/register">Register Here</Link></Form.Text>
				</Form>
			</Jumbotron>
			</HashRouter>
			);
	}
}
export default Login;