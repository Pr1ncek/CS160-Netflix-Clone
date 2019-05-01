import React, { Component } from 'react';
import './CommentPostComponent.css'
const axios = require("axios");

//import "./CommentPostComponent.css"
//import { Form, Button } from 'react-bootstrap/'
//import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio} from 'react-bootstrap'


class CommentPostComponent extends Component {

	post()
	{
		axios.post('api/comments/postcomment', 
			{
				text: "Test", 
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
		    	<input id="comment_text" class="form-control" type="text" placeholder="Comment" />
				<button type="button" class="btn btn-light" ref='comment' onClick={this.post}>Post</button>
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