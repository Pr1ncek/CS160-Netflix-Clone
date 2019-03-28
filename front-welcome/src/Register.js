import React, { Component } from "react";

class Register extends Component {
	submitRegister(e) {}

	render() {
		return (
			<div>
			<h1>REGISTER</h1> 
				<div>
					<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						placeholder="Username"/>
					</div>
					<div>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						placeholder="Email"/>
					</div>
					<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						placeholder="Password"/>
					</div>
					<button
						type="button"
						onClick={this
							.submitRegister.bind(this)}>Create Account</button>
					<div>
					Already have an account? <a href="./login">Login Here</a>
					</div>
				</div>
			</div>
			);
	}
}
export default Register;