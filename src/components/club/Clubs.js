import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import Loading from "../common/Loading";
import ClubCard from "./ClubCard";
import {getClubs} from "../../actions/clubActions";

class Clubs extends Component {
  componentDidMount() {
    this.props.getClubs();
  }

  render() {
    const {clubs, loading} = this.props.clubs;

    let html, totalClubsCount;
    if(clubs && !loading) {
      clubs.length === 0 ? totalClubsCount = 'No club record found.' : totalClubsCount = clubs.length;
      html = (clubs).map((club, index) =>
        (<ClubCard key={index} club={club} />)
      );
    } else {
      html = <Loading/>;
    }

    return(
      <div id="clubs">
        <div className="container">
          <div className="lead py-3">Clubs:{totalClubsCount}</div>
          <div id="clubs-cards">
            {html}
          </div>
        </div>
      </div>
    );
  }
}

Clubs.propTypes = {
  getClubs: PropTypes.func.isRequired,
  clubs: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  clubs: state.clubs
});

export default connect(mapStateToProps, {getClubs})(withRouter(Clubs));