import {FETCH_RESTAURANT_REQUEST, FETCH_RESTAURANT_SUCCESS,FETCH_RESTAURANT_FAILURE} from '../actions';

const initialState = {
  loading: false,
  restaurants: [],
  error: null
}

export default (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case FETCH_RESTAURANT_REQUEST:
    return Object.assign({}, state, {
      loading: true,
      error: null
      })
    default:
      return state;
  }
}
