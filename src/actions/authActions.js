import axios from "axios/index";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {GET_ERRORS, SET_CURRENT_USER} from "./types";

// register user
export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// login user - get token
export const loginUser = (userData) => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {
      // save to local storage
      const {token} = res.data;
      // set token to local storage
      localStorage.setItem('jwtToken', token);
      // set token to auth header
      setAuthToken(token);
      // decode token to get user data
      const decodedData = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decodedData));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// set logged-in user
export const setCurrentUser = (decodedData) => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedData
  }
}

// logout user
export const logoutUser = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem('jwtToken');
  // remove auth header for future requests
  setAuthToken(false);
  // set current user {} and isAuthenticated false
  dispatch(setCurrentUser({}));
}