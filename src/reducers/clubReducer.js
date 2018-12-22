import {CLUBS_LOADING, GET_CLUBS, GET_CLUB} from "../actions/types";

const initialState = {
  clubs: null,
  club: null,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLUBS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_CLUBS:
      return {
        ...state,
        clubs: action.payload,
        loading: false
      }
    case GET_CLUB:
      return {
        ...state,
        club: action.payload,
        loading: false
      }
    default:
      return state;
  }
}