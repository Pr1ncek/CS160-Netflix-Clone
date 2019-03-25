import React, { Component } from 'react';
import DescriptionComponent from './DescriptionComponent'
import CommentComponent from './CommentComponent'

class InformationComponent extends Component {
	render() {
		return (
			<div> 
				<DescriptionComponent />
				<CommentComponent />
			</div>
		);
	}
}

export default InformationComponent