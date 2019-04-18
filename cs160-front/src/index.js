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
  if (localStorage.JWT) {
    setAuthToken(localStorage.JWT);
    const decoded = jwt_decode(localStorage.JWT);
    // check for expiration
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem('JWT');
      setAuthToken(false);
      return false;
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

  logout = () => {
    localStorage.removeItem('JWT');
    setAuthToken(false);
    this.setState({ currentUser: {}, isAuthenticated: false });
  };

  render() {
    const { currentUser, isAuthenticated } = this.state;
    return (
      <React.Fragment>
        <Router>
          <Navbar logout={this.logout} isAuthenticated={isAuthenticated} currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={App} />
            <Route
              path="/login"
              render={props => (
                <Login setCurrentUser={this.setCurrentUser} isAuthenticated={isAuthenticated} {...props} />
              )}
            />
            <Route
              path="/register"
              render={props => <Register {...props} isAuthenticated={isAuthenticated} />}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
