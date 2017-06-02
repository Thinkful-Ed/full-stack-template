import React from 'react';
import {shallow, mount} from 'enzyme';
import {Restaurant} from './restaurant';
import {Searchbar} from './Searchbar';
import {fetchRestaurants} from '../actions';

describe('<Restaurant />', () => {
    it('Renders without crashing', () => {
      const values = [{
              name: 'Dominos',
              image_url: 'http://dominos.com',
              price: '$',
              rating: 1,
              display_phone:'555-5555',
              location: {
                display_address: [
                  '123 abc street',
                  'new york city'
                ]}
              }
            ];
      shallow(<Restaurant restaurant={values}/>);
    });
});
