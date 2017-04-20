import {combineReducers} from 'redux';

import sheltersReducer from './sheltersReducer';
import logInReducer from './logInReducer';
import toggleAddPetReducer from './toggleAddPetReducer';


const rootReducer = combineReducers({
  shelters: sheltersReducer,
  logIn: logInReducer,
  toggleAddPet: toggleAddPetReducer
});

export default rootReducer;