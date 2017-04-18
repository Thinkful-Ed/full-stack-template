import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import animalsReducer from './reducers';

export default createStore(
  animalsReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);