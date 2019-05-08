import React, { Component } from 'react';
import "./CommentComponent.css"

class CommentComponent extends Component {
	render() {
		return (
			<div class = "text-white">
				{this.props.firstName} {this.props.lastName}
				<p class = "comment">{this.props.text}</p>
			</div>
		);
	}
}

export default CommentComponent