export const FETCH_SHELTERS_REQUEST = 'FETCH_SHELTERS_REQUEST';
export const fetchSheltersRequest = () => ({
    type: FETCH_SHELTERS_REQUEST,
    loading: true
});

export const FETCH_SHELTERS_SUCCESS = 'FETCH_SHELTERS_SUCCESS';
export const fetchSheltersSuccess = shelters => ({
    type: FETCH_SHELTERS_SUCCESS,
    loading: false,
    shelters 
});

export const fetchSheltersData = () => dispatch => {
  dispatch(fetchSheltersRequest());
  fetch('../../../api')
    .then(shelters => {
      return shelters.json();
    })
    .then(sheltersJson => {
      return dispatch(fetchSheltersSuccess(sheltersJson));
    })
}