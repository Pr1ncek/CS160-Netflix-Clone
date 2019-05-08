import React, { Component } from 'react';
import './CommentPostComponent.css'
//import "./CommentPostComponent.css"
//import { Form, Button } from 'react-bootstrap/'
//import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio} from 'react-bootstrap'


class CommentPostComponent extends Component {
	render() {
		return (
			
			<div id="comment" class = "bg-dark">
		    	<input id="comment-text" class="form-control" type="text" placeholder="Comment" />
				<button type="button" class="btn btn-light">Post</button>
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