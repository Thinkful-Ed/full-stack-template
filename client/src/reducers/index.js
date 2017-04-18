import {combineReducers} from 'redux';

import sheltersReducer from './sheltersReducer';
import logInReducer from './logInReducer';

const rootReducer = combineReducers({
  shelters: sheltersReducer,
  logIn: logInReducer
});

export default rootReducer;