import React, { Component } from "react";

class Login extends Component {
	submitLogin(e) {}
	render() {
		return (
			<div>
			<h1>LOGIN</h1> 
				<div>
					{/* div className input group to style a group*/}
					<div>
					{/*label for html form control for accessible forms*/}
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						placeholder="Username"/>
					</div>
					{/* div className input group to style a group*/}
					<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						placeholder="Password"/>
					</div>
					{/*when run the app can lose context of this so need to bind the this we are using in the medthod */}
					<button
						type="button"
						onClick={this
							.submitLogin.bind(this)}>Login</button>
					<div>
					Don't have an account? <a href="/register">Register Now</a> 
					</div>
				</div>
			</div>
			);
	}
}
export default Login;