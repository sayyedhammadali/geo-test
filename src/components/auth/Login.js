import React, {Component} from 'react';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from "../../actions/authActions";

import './Auth.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  onChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();

    const {email, password} = this.state;

    const userInput = {
      email,
      password,
    }

    this.props.loginUser(userInput);
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  render() {
    const {email, password, errors} = this.state;

    return (
      <div id="login">
        <div className="container p-0">
          <form name="login_form" className="form-login m-auto" noValidate onSubmit={this.onSubmit} autoComplete="off">
            <h3 className="form-login-heading text-center">Login</h3>
            <hr className="colorgraph mb-5" />
            <input type="email" name="email" placeholder="Email" onChange={this.onChange} value={email} className={classnames('form-control my-3', {'is-invalid': errors.email})}/>
            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}

            <input type="password" name="password" placeholder="Password" onChange={this.onChange} value={password} className={classnames('form-control my-3', {'is-invalid': errors.password})} />
            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}

            <button className="btn btn-lg btn-primary btn-block my-4" type="Submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(withRouter(Login));