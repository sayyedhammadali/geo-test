import React, {Component} from 'react';
import classnames from "classnames";
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";
import {addClub} from "../../actions/clubActions";

import Navbar from "../layout/Navbar";

class AddClub extends Component {
  state = {
    club_name: '',
    club_address: '',
    club_geometry: '',
    club_website: '',
    club_description: '',
    club_city: 'Berlin',
    club_country: 'Germany',
    errors: {}
  }

  onChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();

    const {club_name, club_address, club_geometry, club_website, club_description, club_city, club_country} = this.state;

    const userInput = {
      club_name,
      club_address,
      club_geometry,
      club_website,
      club_description,
      club_city,
      club_country,
    }

    this.props.addClub(userInput, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  render() {
    const {club_name, club_address, club_geometry, club_website, club_description, club_city, club_country, errors} = this.state;

    return (
      <div id="add-club">
        <Navbar/>
        <div className="container p-0">
          <form name="login_form" className="form-login m-auto" noValidate onSubmit={this.onSubmit} autoComplete="off">
            <h3 className="form-login-heading text-center">Add Club</h3>
            <hr className="colorgraph mb-5" />
            <input type="text" name="club_name" placeholder="Club Name" onChange={this.onChange} value={club_name} className={classnames('form-control my-3', {'is-invalid': errors.club_name})}/>
            {errors.club_name && (<div className="invalid-feedback">{errors.club_name}</div>)}

            <input type="text" name="club_address" placeholder="Address" onChange={this.onChange} value={club_address} className={classnames('form-control my-3', {'is-invalid': errors.club_address})}/>
            {errors.club_address && (<div className="invalid-feedback">{errors.club_address}</div>)}

            <input type="text" name="club_geometry" placeholder="Coordinates i.e. 52.516399, 13.377736" onChange={this.onChange} value={club_geometry} className={classnames('form-control my-3', {'is-invalid': errors.club_geometry})}/>
            {errors.club_geometry && (<div className="invalid-feedback">{errors.club_geometry}</div>)}

            <input type="url" pattern="https://.*" name="club_website" placeholder="Website i.e. https://clubname.de" onChange={this.onChange} value={club_website} className={classnames('form-control my-3', {'is-invalid': errors.club_website})}/>
            {errors.club_website && (<div className="invalid-feedback">{errors.club_website}</div>)}

            <textarea rows="5" name="club_description" placeholder="Description" onChange={this.onChange} value={club_description} className={classnames('form-control my-3', {'is-invalid': errors.club_description})}/>
            {errors.club_description && (<div className="invalid-feedback">{errors.club_description}</div>)}

            <input disabled="disabled" type="text" name="club_city" placeholder="City" onChange={this.onChange} value={club_city} className={classnames('form-control my-3', {'is-invalid': errors.club_city})}/>
            {errors.club_city && (<div className="invalid-feedback">{errors.club_city}</div>)}

            <input disabled="disabled" type="text" name="club_country" placeholder="Country" onChange={this.onChange} value={club_country} className={classnames('form-control my-3', {'is-invalid': errors.club_country})}/>
            {errors.club_country && (<div className="invalid-feedback">{errors.club_country}</div>)}

            <button className="btn btn-lg btn-primary btn-block my-4" type="Submit">Add Club</button>
          </form>
        </div>
      </div>
    );
  }
}

AddClub.propTypes = {
  errors: PropTypes.object
}

const mapStateToProps = (state) => ({
  errors: state.errors
});

export default connect(mapStateToProps, {addClub})(withRouter(AddClub));