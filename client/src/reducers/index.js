/* eslint-disable */
import {FETCH_RESTAURANT_REQUEST, FETCH_RESTAURANT_SUCCESS,FETCH_RESTAURANT_FAILURE} from '../actions';

const initialState = {
  loading: false,
  restaurants: [],
  error: null
}

const reducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case FETCH_RESTAURANT_REQUEST:
    return Object.assign({}, state, {
      loading: true,
      error: null
      })
    case FETCH_RESTAURANT_FAILURE:
    return Object.assign({}, state, {
      loading: false,
      error: true
      })
    case FETCH_RESTAURANT_SUCCESS:
    return Object.assign({}, state, {
      loading: false,
      error: null,
      restaurants: action.restaurants
      })
    default:
      return state;
  }
}

export default reducer;
