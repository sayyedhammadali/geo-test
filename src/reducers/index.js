import {combineReducers} from 'redux';
import errorsReducer from './errorsReducer';
import authReducer from './authReducer';
import clubReducer from './clubReducer';

export default combineReducers({
  errors: errorsReducer,
  auth: authReducer,
  clubs: clubReducer
});