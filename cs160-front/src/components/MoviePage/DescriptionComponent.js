import React, { Component } from 'react';
import './DescriptionComponent.css'

class DescriptionComponent extends Component {
	render() {
		return (
			<div class="text-white">
				< br/>

				<div id = "title">{this.props.title}</div>
				
				<div> {this.props.description} </div>
			</div>
		);
	}
}

export default DescriptionComponent