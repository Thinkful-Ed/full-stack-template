/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import Searchbar from './Searchbar';

export class RestaurantListing extends React.Component {

  render() {
    return (
      <div className="restaurant-container">
        <img src="" alt="" className="restaurant-img"/>
        <ul></ul>

      </div>
    )
  }
}

export const mapStateToProps = state => ({restaurants: state.restaurants})

module.exports = connect(mapStateToProps)(RestaurantListing);
