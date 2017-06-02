import reducer from './index';
import {FETCH_RESTAURANT_REQUEST, FETCH_RESTAURANT_SUCCESS,FETCH_RESTAURANT_FAILURE} from '../actions'

// describe('Reducer', () => {
//     it('Should set the initial state when nothing is passed in', () => {
//         const state = reducer(undefined, {type: '__UNKNOWN'});
//
//         expect(state.loading).toEqual(false);
//         expect(state.error).toEqual(null);
//         expect(state.restaurants).toEqual([]);
//     });
//
//     it('Should return the current state on an unknown action', () => {
//         let currentState = {};
//         const state = reducer(currentState, {type: '__UNKNOWN'});
//         expect(state).toBe(currentState);
//     });
//
//     describe('FETCH_RESTAURANT_REQUEST', () => {
//         it('Should send a request to fetch restaurant(s)', () => {
//             let state = {
//                 restaurants: [],
//                 loading: true,
//                 error: null
//             };
//             state = reducer(state, FETCH_RESTAURANT_REQUEST());
//             expect(state.restaurants).toEqual([]);
//             expect(state.loading).toEqual(true);
//             expect(state.error).toEqual(null);
//         });
//     });
//
// });
