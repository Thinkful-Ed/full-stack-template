export const FETCH_ANIMALS_REQUEST = 'FETCH_ANIMALS_REQUEST';
export const fetchAnimalsRequest = () => ({
    type: FETCH_ANIMALS_REQUEST,
    loading: true
});

export const FETCH_ANIMALS_SUCCESS = 'FETCH_ANIMALS_SUCCESS';
export const fetchAnimalsSuccess = shelters => ({
    type: FETCH_ANIMALS_SUCCESS,
    loading: false,
    shelters 
});

export const fetchAnimalData = () => dispatch => {
  dispatch(fetchAnimalsRequest());
  fetch('../../../api')
    .then(shelters => {
      return shelters.json();
    })
    .then(sheltersJson => {
      console.log(sheltersJson);
      //dispatch(fetchAnimalsSuccess(sheltersJson));
    })
}