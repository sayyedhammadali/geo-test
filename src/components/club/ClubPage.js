import React, {Component} from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";
import {getClub} from "../../actions/clubActions";
import Loading from "../common/Loading";

class ClubPage extends Component {
  componentDidMount() {
    const _id = this.props.match.params._id;
    this.props.getClub(_id);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.clubs.club === null && this.props.clubs.loading) {
      this.props.history.push('/pagenotfound');
    }
  }

  render() {
    const {club, loading} = this.props.clubs;

    let html;
    if(club && !loading) {
      html = (
        <div>
          <h1>{club.club_name}</h1>
          <h5><i className="fas fa-map-marker-alt"></i> {club.club_address}, {club.club_city} {club.club_country}</h5>
          <a href={club.club_website}><i className="fas fa-link"></i> visit club website</a>
          <p>{club.club_description}</p>
        </div>
      )
    } else {
      html = <Loading/>;
    }

    return (
      <div id="club-page">
        <div className="container">
          {html}
        </div>
      </div>
    );
  }
}

ClubPage.propTypes = {
  clubs: PropTypes.object.isRequired,
  getClub: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  clubs: state.clubs
});

export default connect(mapStateToProps, {getClub})(withRouter(ClubPage));