import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../actions';

const initialState = {
  loggedInShelter: false,
  loading: false
};

const logInReducer = (state=initialState, action) => {
  if (action.type === LOGIN_REQUEST) {
    return Object.assign({}, state, { loading: action.loading });
  }
  else if (action.type === LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      loggedInShelter: action.shelter,
      loading: false
    });
  } 
  return state;
}

export default logInReducer;