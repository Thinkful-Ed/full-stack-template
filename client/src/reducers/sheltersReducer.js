import {FETCH_SHELTERS_REQUEST, FETCH_SHELTERS_SUCCESS} from '../actions';

const initialState = {
  data: [],
  loading: false,
  filterType: false,
  filterZip: false
};

const sheltersReducer = (state=initialState, action) => {
  if (action.type === FETCH_SHELTERS_REQUEST) {
    return Object.assign({}, state, { loading: action.loading });
  }
  else if (action.type === FETCH_SHELTERS_SUCCESS) {
    return Object.assign({}, state, {
      data: action.shelters,
      loading: action.loading,
      filterType: action.filterType,
      filterZip: action.filterZip
    });
  } 
  return state;
}

export default sheltersReducer;