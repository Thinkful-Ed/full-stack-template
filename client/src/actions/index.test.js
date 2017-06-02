import {
    SUBMIT_RECIPE,
    submitRecipe,
    SELECT_RESTAURANT,
    selectRestaurant,
    FETCH_RESTAURANT_REQUEST,
    fetchRestaurantRequest,
    FETCH_RESTAURANT_SUCCESS,
    fetchRestaurantSuccess,
    FETCH_RESTAURANT_FAILURE,
    fetchRestaurantFailure,
    fetchRestaurants
} from './index';

describe('submitRecipe', () => {
    it('Should return the action', () => {
        const action = submitRecipe();
        expect(action.type).toEqual(SUBMIT_RECIPE);
    });
});

describe('selectRestaurant', () => {
    it('Should return the action', () => {
        const action = selectRestaurant();
        expect(action.type).toEqual(SELECT_RESTAURANT);
    });
});

// describe('fetchRestaurants', () => {
//     it('Should return the action', () => {
//         const action = fetchRestaurants();
//         expect(action.type).toEqual();
//     });
// });
