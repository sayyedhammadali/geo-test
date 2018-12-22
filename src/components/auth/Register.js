import React, {Component} from 'react';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {registerUser} from "../../actions/authActions";

class Register extends Component {
  state = {
    organizer_name: '',
    email: '',
    password: '',
    errors: {}
  }

  onChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();

    const userInput = {
      organizer_name: this.state.organizer_name,
      email: this.state.email,
      password: this.state.password,
    }

    this.props.registerUser(userInput, this.props.history);
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  render() {
    const {organizer_name, email, password, errors} = this.state;

    return (
      <div id="register">
        <div className="container p-0">
          <form name="register_form" className="form-register m-auto" noValidate onSubmit={this.onSubmit} autoComplete="off">
            <h3 className="form-register-heading text-center">Register</h3>
            <hr className="colorgraph mb-5" />
            <input type="text" name="organizer_name" placeholder="Company / Name" onChange={this.onChange} value={organizer_name} className={classnames('form-control my-3', {'is-invalid': errors.organizer_name})} />
            {errors.organizer_name && (<div className="invalid-feedback">{errors.organizer_name}</div>)}

            <input type="email" name="email" placeholder="Email" onChange={this.onChange} value={email} className={classnames('form-control my-3', {'is-invalid': errors.email})}/>
            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}

            <input type="password" name="password" placeholder="Password" onChange={this.onChange} value={password} className={classnames('form-control my-3', {'is-invalid': errors.password})} />
            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}

            <button className="btn btn-lg btn-primary btn-block my-4" type="Submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));