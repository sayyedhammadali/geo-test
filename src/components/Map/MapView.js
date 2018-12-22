import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {CurrentLocationIcon} from "../common/CurrentLocationIcon";

import './MapView.scss';

class MapView extends Component {
  state = {
    current_location: {lat: 52.516399, lng: 13.377736},
    have_current_location: false,
    zoom: 13,
    clubs: []
  }

  componentDidMount() {
    console.log(this.state.current_location.lat, this.state.current_location.lng)
    /*axios.get('/api/clubs')
      .then(res => this.setState({clubs: res.data}))
      .catch(err => console.log(err));*/
  }

  currentLocation = e => {
    console.log('show current location!');
    navigator.geolocation.getCurrentPosition(position => {
      // console.log('user gave permission to access location.');
      this.setState({
        current_location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        have_current_location: true,
      });
    }, () => {
      // console.log('user didn\'t gave access to show location.');
      axios.get('https://ipapi.co/json')
        .then(res => {
          this.setState({
            current_location: {
              lat: res.data.latitude,
              lng: res.data.longitude
            },
            have_current_location: true,
          });
        })
        .catch(err => console.log(err));
    });
  }

  render() {
    const {current_location, have_current_location, zoom, clubs} = this.state;
    let clubs_marker, current_location_marker;

    /*if(clubs.length) {
      clubs_marker = (clubs).map((club, index) =>
        (<Marker key={index} position={club.club_geometry}>
          <Popup>
            <Link to={`/club/${club._id}`}>{club.club_name} <i className="fas fa-chevron-right"></i></Link>
            <br/>
            {club.club_address}
          </Popup>
        </Marker>)
      );
    }*/

    /*if(have_current_location) {
      current_location_marker = (
        <Marker position={current_location} icon={CurrentLocationIcon}>
          <Popup>
            your current location!
          </Popup>
        </Marker>);
    }*/
    current_location_marker = (
      <Marker position={current_location}>
        <Popup>
          your current location!<br/>
          {current_location.lat}, {current_location.lng}
        </Popup>
      </Marker>);

    return (
      <div id="map-view">
        <button className="btn btn-primary" onClick={this.currentLocation}>Current Location</button>
        <Map center={current_location} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />

          {current_location_marker}

          {/*{clubs_marker}*/}
        </Map>
      </div>
    );
  }
}

export default MapView;
