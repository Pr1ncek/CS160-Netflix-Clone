import React, { Component } from 'react';
import DescriptionComponent from './DescriptionComponent'
import CommentComponent from './CommentComponent'
import CommentPostComponent from './CommentPostComponent'
import "./InformationComponent.css"

class InformationComponent extends Component {
	render() {
		return (
			<div id = "information" class = "text-white"> 
				<DescriptionComponent />
				<div id = "comments">
					< br/>
					Comments
					<CommentComponent />
					<CommentComponent />
					<CommentComponent />
					<CommentComponent />
					<CommentComponent />
					<CommentComponent />
					<CommentComponent />
					<CommentComponent />
					<CommentComponent />
				</div>
				<CommentPostComponent />
			</div>
		);
	}
}

export default InformationComponent