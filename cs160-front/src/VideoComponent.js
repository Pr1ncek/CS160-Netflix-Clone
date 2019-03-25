import React, { Component } from 'react';
import './VideoComponent.css'

class VideoComponent extends Component {
	render() {
		return (
			<iframe id="movie" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"> </iframe>
		);
	}
}

export default VideoComponent