export const FETCH_ANIMALS_REQUEST = 'FETCH_ANIMALS_REQUEST';
export const fetchAnimalsRequest = () => ({
    type: FETCH_ANIMALS_REQUEST,
    loading: true
});

export const FETCH_ANIMALS_SUCCESS = 'FETCH_ANIMALS_SUCCESS';
export const fetchAnimalsSuccess = animals => ({
    type: FETCH_ANIMALS_SUCCESS,
    loading: false,
    animals 
});

export const fetchAnimalData = () => dispatch => {
  dispatch(fetchAnimalsRequest());
  fetch('../../../api')
    .then(animals => {
      return animals.json();
    })
    .then(animalsJson => {
      console.log(animalsJson);
    })
}