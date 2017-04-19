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

// Adding animal from dashboard
// export const ADD_ANIMAL_REQUEST = 'ADD_ANIMAL_REQUEST';
// export const addAnimalRequest = (animal) => ({
//     type: ADD_ANIMAL_REQUEST,
//     loading: true
// });

// export const ADD_ANIMAL_SUCCESS = 'ADD_ANIMAL_SUCCESS';
// export const addAnimalSuccess = () => ({
//     type: ADD_ANIMAL_SUCCESS,
//     loading: false
// });

export const fetchAddNewAnimal = (id, newAnimal) => dispatch => {
  fetch(`../../../api/login/update/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(newAnimal)
  })
  .then(res => {
    console.log('POST Success');
    return res.json(); 
  })
  .then(result => {
    return dispatch(fetchLogInData(id));
  });
}