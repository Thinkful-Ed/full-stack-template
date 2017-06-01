import React from 'react';
import {shallow, mount} from 'enzyme';
import {Searchbar} from './searchbar';
import {fetchRestaurants} from '../actions';

describe('<Searchbar />', () => {
    it('Renders without crashing', () => {
        shallow(<Searchbar />);
    });

    it('Should dispatch fetchRestaurants when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<Searchbar dispatch={callback} />);
        const query = {
          search: "pizza",
          location: "nyc"
        }
        wrapper.find('.search-input').node.value = query.search;
        wrapper.find('.location-input').node.value = query.location;
        wrapper.simulate('submit');
        // expect(callback).toHaveBeenCalledWith(fetchRestaurants(query));
        expect(callback).toHaveBeenCalledWith(query);
    });

    xit('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<Searchbar dispatch={() => {}}/>);
        const searchInput = wrapper.find('.search-input');
        const locationInput = wrapper.find('.location-input');
        searchInput.node.value = 'pizza';
        locationInput.node.value = 'nyc'
        wrapper.simulate('submit');
        expect(searchInput.node.value).toEqual('');
        expect(locationInput.node.value).toEqual('');
    });
});
