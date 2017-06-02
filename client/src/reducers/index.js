/* eslint-disable */
import {
  FETCH_RESTAURANT_REQUEST,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_FAILURE,
  FETCH_RECIPE_FAILURE,
  FETCH_RECIPE_SUCCESS,
  SELECT_RESTAURANT
} from '../actions';

const initialState = {
  loading: false,
  restaurants: [],
  error: null,
  selectRestaurant: null,
  haveRecipe: false,
  currentRecipes: {
    recipes: [],
    _id: null,
    yelpId: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_REQUEST:
      return {
        ...state,
        currentRecipes: {...initialState.currentRecipes},
        haveRecipe: false
      }

    case FETCH_RESTAURANT_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true
      })
    case FETCH_RESTAURANT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        restaurants: action.restaurants
      })
    case FETCH_RECIPE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.errorMessage.message
      })
    case FETCH_RECIPE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        haveRecipe: action.recipe != null,
        currentRecipes: {
          recipes: action.recipes.recipes,
          _id: action.recipes._id,
          yelpId: action.recipes.yelpId
        }
      })
    case SUBMIT_RECIPE:
    return Object.assign({}, state, {
      loading: true
      })
    case SUBMIT_RECIPE_SUCCESS:
    return Object.assign({}, state, {
      loading: false,
      currentRecipes: action.recipes
      })
    case SELECT_RESTAURANT:
      return {
        ...state,
        selectRestaurant: state.restaurants.find(r => action.restaurant.id === r.id)
      }
    default:
      return state;
  }
}

export default reducer;
