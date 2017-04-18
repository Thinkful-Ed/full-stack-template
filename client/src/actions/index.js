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

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const logInRequest = () => ({
    type: LOGIN_REQUEST,
    loading: true
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const logInSuccess = shelter => ({
    type: LOGIN_SUCCESS,
    loading: false,
    shelter 
});

export const fetchLogInData = (id) => dispatch => {
  dispatch(logInRequest());
  fetch(`../../../api/login/${id}`)
    .then(shelter => {
      return shelter.json();
    })
    .then(shelterJson => {
      return dispatch(logInSuccess(shelterJson));
    })
}