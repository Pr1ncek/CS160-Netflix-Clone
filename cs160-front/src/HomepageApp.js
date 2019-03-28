import React, { Component } from 'react';
import logo from './logo.svg';
//import './HomepageApp.css';
import HeaderComponent from './HeaderComponent'
import ProfileIconComponent from './ProfileIconComponent'
import SearchBarComponent from './SearchBarComponent'

class HomepageApp extends Component {
  render() {
    return (
      <div>
        <HeaderComponent /> 
        <ProfileIconComponent />
        <SearchBarComponent />
       </div>
    );
  }
}

export default HomepageApp;

        // <VideoBarComponent />
