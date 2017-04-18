import {FETCH_ANIMALS_REQUEST, FETCH_ANIMALS_SUCCESS} from '../actions';

const initialState = {
  animals: [],
  loading: false
};

const animalsReducer = (state=initialState, action) => {
  if (action.type === FETCH_ANIMALS_REQUEST) {
    return Object.assign({}, state, { loading: action.loading });
  }
  else if (action.type === FETCH_ANIMALS_SUCCESS) {
    return Object.assign({}, state, {
      animals: action.animals,
      loading: action.loading
    });
  } 
  return state;
}

export default animalsReducer;