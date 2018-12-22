import axios from "axios/index";

import {GET_ERRORS, CLUBS_LOADING, GET_CLUBS, GET_CLUB} from "./types";

// set clubs loading
export const setClubsLoading = () => {
  return {
    type: CLUBS_LOADING
  }
}

// get all clubs
export const getClubs = () => dispatch => {
  dispatch(setClubsLoading());
  axios.get('/api/clubs')
    .then(res => {
      dispatch({
        type: GET_CLUBS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_CLUBS,
        payload: null
      })
    });
}

// get club by _id
export const getClub = (_id) => dispatch => {
  dispatch(setClubsLoading());
  axios.get(`/api/clubs/${_id}`)
    .then(res => {
      dispatch({
        type: GET_CLUB,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_CLUB,
        payload: null
      })
    });
}

// all new club
export const addClub = (userData, history) => dispatch => {
  dispatch(setClubsLoading());
  axios.post('/api/clubs', userData)
    .then(res => history.push('/clubs'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}