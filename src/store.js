import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const initialState = {};
const middleware = [thunk];
const hostname = window && window.location && window.location.hostname;
let composed;

if(hostname === 'localhost') {
  console.log('its dev environment, if you cant run app please install chrome "Redux DevTools" extension!');
  composed = compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
  composed = compose(applyMiddleware(...middleware));
}

const store = createStore(
  rootReducers,
  initialState,
  composed
);

export default store;