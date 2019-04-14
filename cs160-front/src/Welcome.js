import React, { Component } from "react";
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import './Style.css';

class Welcome extends Component {
	render() {
		return (
			<HashRouter>
			<div>
			<h1> Welcome </h1>
			<ul className="header">
				<li><NavLink to="/login">Login</NavLink></li>
				<li><NavLink to="/register">Register</NavLink></li>
			</ul>
			<div className="content">
				<Route exact path="/login" component={Login}/>
				<Route path="/register" component={Register}/>

			</div>
			</div>
			</HashRouter>
			);
	}
}

export default Welcome;