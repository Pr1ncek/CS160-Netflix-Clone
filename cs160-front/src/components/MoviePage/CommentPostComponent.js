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
	this.setState({ [e.target.id]: e.target.velue})}

	post = (e) => {
		e.preventDefault()
		console.log("here")
		axios.post('api/comments/postcomment', 
			{
				text: this.state.comment_text, 
				movieID: "Test", 
				userID:"Test"
			}).then(res => 
			{
				console.log(res.data);
			})
	}
	

	render() {
		return (
			
			<div id="comment">
				<form onSubmit={this.post}>
		    		<input id="comment_text" class="form-control" type="text" placeholder="Comment"  onChange={this.handleChange}/>
					<button type="submit" class="btn btn-light" ref='comment' >Post</button>
				</form>
			</div>
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