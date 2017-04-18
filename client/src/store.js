import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import sheltersReducer from './reducers';

export default createStore(
  sheltersReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);