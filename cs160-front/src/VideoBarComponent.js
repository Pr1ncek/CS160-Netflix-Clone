import './VideoBarComponent.css';
import React, { Component } from 'react';
import Avatar from './images/Avatar.jpg'
import Pirates from './images/Pirates.jpg'
import Spectre from './images/Spectre.jpg'

class VideoBarComponent extends Component {
	render() {
		return (
            
			<div class = "scrollmenu">
        
                <div class = "VideoBarTitle">
                TOP 10 MOVIES
                </div>    
                    
                <div class = "VideoBarList">
                
                <a href="#avatar">
                <movie id="0"> </movie>
                <img src={Avatar} alt="avatar"/> </a>
                 
                <a href="#spectre"><movie id="1"></movie>
                <img src={Spectre} alt="spectre"/> </a>    
            
                <a href="#pirates">
                <movie id="2"></movie>
                <img src={Pirates} alt="pirates"/></a>
                </div>
                
            </div>
            
		);
        
     
	}

}

export default VideoBarComponent