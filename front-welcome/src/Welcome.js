import React, { Component } from "react";


class Welcome extends Component {
	render() {
		return (
			<div>
			<h1> Welcome </h1>
			<ul>
				<li><a href='./'>Login</a></li>
				<li><a href='./Register'>Register</a></li>
			</ul>
			<div className="content">

			</div>
			</div>
			);
	}
}

export default Welcome;