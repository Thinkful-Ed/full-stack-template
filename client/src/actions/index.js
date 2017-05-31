

export const SUBMIT_RECIPE = 'SUBMIT_RECIPE'
export const submitRecipe = (recipe) => ({
  type: SUBMIT_RECIPE,
  recipe
})
export const SELECT_RESTAURANT = 'SELECT_RESTAURANT'
export const selectRestaurant = (restaurant) => ({
  type: SELECT_RESTAURANT,
  restaurant
})
export const FETCH_RESTAURANT_REQUEST = 'FETCH_RESTAURANT_REQUEST'
export const fetchRestaurantRequest = () => ({
  type: FETCH_RESTAURANT_REQUEST
})
export const FETCH_RESTAURANT_SUCCESS = 'FETCH_RESTAURANT_SUCCESS'
export const fetchRestaurantSuccess = (restaurants) => ({
  type: FETCH_RESTAURANT_SUCCESS,
  restaurants
})
export const FETCH_RESTAURANT_FAILURE = 'FETCH_RESTAURANT_FAILURE'
export const fetchRestaurantFailure = () => ({
  type: FETCH_RESTAURANT_FAILURE
})

export const fetchRestaurants = searchQuery => dispatch => {
  fetch('http://localhost:8080/api', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(searchQuery)
  })
    .then(data=>{

      if(!data.ok){
        return console.log('The fetch request failed');
      }
      return data.json()
      }).then(data=>{
        console.log(data);
    })
}
