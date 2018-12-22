import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {logoutUser} from "../../actions/authActions";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

class Navbar extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <div id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="30" height="30" alt="partygps logo" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {/*left menu*/}
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/clubs">Clubs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add/club">Add Club</Link>
              </li>
              {/*<li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>*/}
            </ul>

            {/* right menu */}
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="" onClick={this.onLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logoutUser})(withRouter(Navbar));