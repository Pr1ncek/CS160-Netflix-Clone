import React, { Component } from 'react';
import "./CommentComponent.css"

class CommentComponent extends Component {
	render() {
		return (
			<div class = "text-white">
				Author
				<p class = "comment">This is an example comment from a person </p>
			</div>
		);
	}
}

export default CommentComponent