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
