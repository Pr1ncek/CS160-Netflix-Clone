import React, { Component } from 'react';
import './CommentPostComponent.css'
import axios from 'axios'

//import "./CommentPostComponent.css"
//import { Form, Button } from 'react-bootstrap/'
//import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio} from 'react-bootstrap'


class CommentPostComponent extends Component {

	state = {
		comment_text: ''
	}

	handleChange = (e) => {
		console.log(e.target.value)
		console.log(e.target.id)
		this.setState({ [e.target.id]: e.target.value})}

	post = (e) => {
		e.preventDefault()
		console.log("here")
		console.log(this.state.comment_text)
		console.log(this.props.id)
		console.log(this.props.user)
		axios.post('api/comments/postComment', 
			{
				text: this.state.comment_text, 
				movieID: this.props.id, 
				userID: this.props.user.id
			}).then(res => 
			{
				console.log(res.data);
			})
	}
	
	render() {
		return (
			
			<form id="comment" onSubmit={this.post}>
		   		<input id="comment_text" class="form-control" type="text" placeholder="Comment"  onChange={this.handleChange}/>
				<button type="submit" class="btn btn-light" ref='comment' >Post</button>
			</form>
			/*
			<section class="container">
    			<div class="one"></div>
    			<div class="two"></div>
			</section>
			*/
		);
	}
}

export default CommentPostComponent