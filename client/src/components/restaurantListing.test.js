import React from 'react';
import {shallow, mount} from 'enzyme';
import {RestaurantListing} from './restaurantListing';
import {fetchRestaurants} from '../actions';

describe('<RestaurantListing />', () => {
  it('Renders without crashing', () => {
        shallow(<RestaurantListing restaurants={[]} />);
  });

  it('Renders a list of restaurants', () => {
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
    const wrapper = shallow(<RestaurantListing restaurants={values} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(values.length);
    // console.log(items);
    // values.forEach((value, index) => {
    //         expect(items.at(index).text()).toEqual(value.toString());
    //     });
  });
});
