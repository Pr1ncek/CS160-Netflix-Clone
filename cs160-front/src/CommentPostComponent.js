import React, { Component } from 'react';
// import "./CommentPostComponent.css"
import { Form, Button } from 'react-bootstrap/'
// import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio} from 'react-bootstrap';

class CommentPostComponent extends Component {
	render() {
		return (
			<div>
				<Form>
					<Form.Control as="textarea"/>
					<Button variant="primary" size="lg">Light</Button>
				</Form>
			</div>
		);
	}
}

export default CommentPostComponent