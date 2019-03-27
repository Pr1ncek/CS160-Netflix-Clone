import React, { Component } from 'react';
import Avatar from './images/AvatarImg.png';
import './ProfileIconComponent.css'



class ProfileIconComponent extends Component {
	render() {
		return (
            <div class = "ProfileIconContainer"> 
                <img src={Avatar} alt="avatar"/> 
            </div>
		);
	}
}

export default ProfileIconComponent