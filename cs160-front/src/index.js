import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setAuthToken from './utils/set-auth-token';
import jwt_decode from 'jwt-decode';

import App from './components/App/App';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Navbar from './components/Navbar/Navbar';

const checkAuthenticationStatus = () => {
  // check for token
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    // check for expiration
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // logic to logout user
    }
    return decoded;
  }
  return false;
};

class Root extends React.Component {
  state = {
    currentUser: {},
    isAuthenticated: false
  };

  componentDidMount() {
    const currentUser = checkAuthenticationStatus();
    if (currentUser) this.setState({ currentUser, isAuthenticated: true });
  }

  setCurrentUser = user => this.setState({ currentUser: user, isAuthenticated: true });

  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={App} />
            <Route
              path="/login"
              render={props => <Login setCurrentUser={this.setCurrentUser} {...props} />}
            />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
