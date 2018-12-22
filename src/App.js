import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {setCurrentUser, logoutUser} from "./actions/authActions";

import './App.scss';

import setAuthToken from './utils/setAuthToken';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';
import MapView from "./components/Map/MapView";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/layout/Dashboard";
import Clubs from "./components/club/Clubs";
import ClubPage from "./components/club/ClubPage";
import AddClub from "./components/club/AddClub";
import PageNotFound from "./components/common/PageNotFound";

// check for token in local storage
if(localStorage.jwtToken) {
  // set auth token in header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user data
  const decodedData = jwt_decode(localStorage.jwtToken);
  // set current user and isAuthenticated
  store.dispatch(setCurrentUser(decodedData));

  // check for expired token
  const currentTime = Date.now() / 1000;
  if(decodedData.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());
    // redirect to login page
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapView/>
      </div>
    );
  }
}

export default App;
