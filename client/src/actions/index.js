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
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS'
export const fetchRecipeSuccess = (recipes) => ({
  type: FETCH_RECIPE_SUCCESS,
  recipes
})
export const FETCH_RECIPE_FAILURE = 'FETCH_RECIPE_FAILURE'
export const fetchRecipeFailure = (errorMessage) => ({
  type: FETCH_RECIPE_FAILURE,
  errorMessage
})


const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const fetchRestaurants = searchQuery => dispatch => {
  dispatch(fetchRestaurantRequest())
  fetch(`/api/yelp?search=${searchQuery.search}&location=${searchQuery.location}`, {
    headers
  })
    .then(data=>{
      if(!data.ok){
        return dispatch(fetchRestaurantFailure())
      }
      return data.json()
      }).then(data=>{
        return dispatch(fetchRestaurantSuccess(data.businesses))
    })
}
export const fetchRecipes = restaurantId => dispatch => {
  dispatch(fetchRestaurantRequest());
  fetch(`/api/restaurants/${restaurantId}`, {
    headers
  })
    .then(data=>{
      if(!data.ok){
        console.log('data failed');
        return dispatch(fetchRecipeFailure())
      }
      return data.json()
      }).then(data=>{
        if(!data) {
          return dispatch(fetchRecipeFailure(new Error('Sorry, there\'s no recipes')))
        }
        return dispatch(fetchRecipeSuccess(data))
    })
    .catch(err => {
      console.log({err});
      return dispatch(fetchRecipeFailure())
    })
}

export const submitRecipe = (recipe, restaurantId) => dispatch => {
  dispatch(fetchRestaurantRequest());
  fetch(`/api/restaurants/${restaurantId}`, {
    method: 'put',
    body: JSON.stringify(recipe),
    headers
  })
    .then(data=>{
      if(!data.ok){
        console.log('data failed to update');
        return dispatch(submitRecipeFailure())
      }
      return data.json()
      }).then(data=>{
        console.log(data);
        return dispatch(submitRecipeSuccess(data))
    })
}
