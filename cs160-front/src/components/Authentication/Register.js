import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = this.state;
    axios
      .post('/api/auth/register', { firstName, lastName, email, password, confirmPassword })
      .then(res => {
        this.props.history.push('/login');
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
      });
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

  render() {
    const { errors } = this.state;
    return (
      <div className="register mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center mb-4">Create your Notflix account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    className={
                      errors.firstName
                        ? 'form-control form-control-lg mb-3 is-invalid'
                        : 'form-control form-control-lg mb-3'
                    }
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div className="form-group">
                  <input
                    className={
                      errors.email
                        ? 'form-control form-control-lg mb-3 is-invalid'
                        : 'form-control form-control-lg mb-3'
                    }
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
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
                <div className="form-group">
                  <input
                    className={
                      errors.confirmPassword
                        ? 'form-control form-control-lg is-invalid'
                        : 'form-control form-control-lg '
                    }
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
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

export default Register;
