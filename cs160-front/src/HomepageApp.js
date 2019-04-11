import React, { Component } from 'react';
import logo from './logo.svg';
//import './HomepageApp.css';
import HeaderComponent from './HeaderComponent'
import ProfileIconComponent from './ProfileIconComponent'
import SearchBarComponent from './SearchBarComponent'
import VideoBarComponent from './VideoBarComponent'
import Avatar from './images/Avatar.jpg'

class HomepageApp extends Component {
  render() {
    return <div/>;
  }
    
    componentDidMount(){
        var movies = ["Avatar ", "Spectre", "Pirates"];
        
document.getElementById("0").innerHTML = movies[0];
document.getElementById("1").innerHTML = movies[1];
document.getElementById("2").innerHTML = movies[2];
    }
    
     render() {
    return (
      <div>
        <HeaderComponent /> 
        <ProfileIconComponent />
        <SearchBarComponent />
        <VideoBarComponent />
       </div>
    );
  }
    
    
    
    
    
}

export default HomepageApp;

       
