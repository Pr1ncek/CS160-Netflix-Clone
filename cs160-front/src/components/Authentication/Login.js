import React, { Component } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/set-auth-token';
import jwt_decode from 'jwt-decode';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post('/api/auth/login', { email, password })
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('JWT', token);
        setAuthToken(token);
        const decodedUser = jwt_decode(token);
        this.props.setCurrentUser(decodedUser);
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
      });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="login mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center mb-4">Sign in to your Notflix account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    className={
                      errors.email
                        ? 'form-control form-control-lg mb-3 is-invalid'
                        : 'form-control form-control-lg mb-3'
                    }
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <input
                    className={
                      errors.password
                        ? 'form-control form-control-lg is-invalid'
                        : 'form-control form-control-lg '
                    }
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <input type="submit" className="btn btn-danger btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
