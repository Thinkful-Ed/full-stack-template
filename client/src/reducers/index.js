import {FETCH_SHELTERS_REQUEST, FETCH_SHELTERS_SUCCESS} from '../actions';

const initialState = {
  shelters: [],
  loading: false
};

const sheltersReducer = (state=initialState, action) => {
  if (action.type === FETCH_SHELTERS_REQUEST) {
    return Object.assign({}, state, { loading: action.loading });
  }
  else if (action.type === FETCH_SHELTERS_SUCCESS) {
    return Object.assign({}, state, {
      shelters: action.shelters,
      loading: action.loading
    });
  } 
  return state;
}

export default sheltersReducer;