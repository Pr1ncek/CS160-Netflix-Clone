import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import HomepageApp from './HomepageApp';
import UserProfile from './UserProfile'
import EditProfile from './EditProfile'

//ReactDOM.render(<EditProfile />, document.getElementById('root'));
//ReactDOM.render(<UserProfile />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<HomepageApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
