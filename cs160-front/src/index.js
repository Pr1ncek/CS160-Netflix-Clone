import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import Register from './Register'
import UserProfile from './UserProfile'
import Welcome from './Welcome'
import * as serviceWorker from './serviceWorker';
import HomepageApp from './HomepageApp';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HomepageApp />, document.getElementById('root'));
//ReactDOM.render(<Login />, document.getElementById('root'));
//ReactDOM.render(<Register />, document.getElementById('root'));
//ReactDOM.render(<UserProfile />, document.getElementById('root'));
//ReactDOM.render(<Welcome />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
