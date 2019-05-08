import React, { Component } from 'react';
import DescriptionComponent from './DescriptionComponent'
import "./InformationComponent.css"

class InformationComponent extends Component {
	render() {
		return (
			<div> 
				<DescriptionComponent title={this.props.title} description={this.props.description}/>
			</div>
		);
	}
}

export default InformationComponent