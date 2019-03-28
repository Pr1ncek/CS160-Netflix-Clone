import React, { Component } from "react";
import blankPhoto from "./images/AvatarImg.png"
import abedPhoto from "./images/abed.jpg"
import "./Style.css"

var user = {
  basicInfo: {
    name: "Abed Nadir",
    email: "abed.nadir@greendale.com",
    photo: abedPhoto,
  }
}


class Avatar extends React.Component {
  render() {
    var image = this.props.image,
        style = {
          width: this.props.width || 50,
          height: this.props.height || 50
        }; 
    
    if (!image) return null;
    
    return (
     <div className="avatar" style={style}>
           <img src={this.props.image} /> 
      </div>
    );
  }
}

class MainPanel extends React.Component {
  render() {
    var info = this.props.info;
    if (!info) return null;
    
    return (
     <div>
        <div className="top">
            <Avatar 
               image={info.photo} 
               width={200}
               height={200}
            /> 
            <h2>{info.name}</h2>
            <h3>{info.email}</h3>
    
        </div>
        
      </div>
    );
  }
}


class UserProfile extends React.Component {
  render() {
    return (
    <div>
      <div id="user-profile">
        <MainPanel info={user.basicInfo} />
      </div>
      <ul className="header">
        <li><a href='./playlists'>Playlists</a></li>
        <li><a href='./history'>History</a></li>
        <li><a href='./comments'>Comments</a></li>
      </ul>
    </div>
    );
  }
}

export default UserProfile;