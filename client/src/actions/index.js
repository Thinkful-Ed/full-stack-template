export const FETCH_SHELTERS_REQUEST = 'FETCH_SHELTERS_REQUEST';
export const fetchSheltersRequest = () => ({
    type: FETCH_SHELTERS_REQUEST,
    loading: true
});

export const FETCH_SHELTERS_SUCCESS = 'FETCH_SHELTERS_SUCCESS';
export const fetchSheltersSuccess = (shelters, filterType, filterZip) => ({
    type: FETCH_SHELTERS_SUCCESS,
    loading: false,
    shelters,
    filterType,
    filterZip 
});

export const fetchSheltersData = (filterType, filterZip) => dispatch => {
  dispatch(fetchSheltersRequest());
  fetch('../../../api')
    .then(shelters => {
      return shelters.json();
    })
    .then(sheltersJson => {
      return dispatch(fetchSheltersSuccess(sheltersJson, filterType, filterZip));
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
      console.log('log in success');
      return dispatch(logInSuccess(shelterJson));
    })
}


export const TOGGLE_ADD_PET = 'TOGGLE_ADD_PET';
export const toggleAddPet = () => ({
  type: TOGGLE_ADD_PET
});

export const fetchAddNewAnimal = (id, newAnimal) => dispatch => {
  fetch(`../../../api/login/update/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(newAnimal)
  })
  .then(res => {
    console.log('PUT Success');
    return res.json(); 
  })
  .then(result => {
    console.log('dispatching log in');
    return dispatch(fetchLogInData(id));
  });
}

export const deleteAnimal = (id, animalId) => dispatch => {
  fetch(`../../../api/login/update/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify({animalId})
  })
  .then(result => {
    console.log('DELETE Success', result);
    console.log('dispatching log in');
    return dispatch(fetchLogInData(id));
  });
}