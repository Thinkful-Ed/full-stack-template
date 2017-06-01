/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import Searchbar from './Searchbar';

export function Restaurant(props) {
  console.log(props);
  const restaurant = props.restaurant[0]

  return (
    <div className="restaurant-page">
      <h1>{restaurant.name}</h1>
      <p className="rating">{restaurant.rating}</p>
      <img src={restaurant.image_url} alt=""/>
      <p className="price">{restaurant.price}</p>
      <div className="address-container">
        <p>{restaurant.location.display_address[0]}</p>
        <p>{restaurant.location.display_address[1]}</p>
        <p>{restaurant.display_phone}</p>
      </div>
    </div>
  )
}

export const mapStateToProps = (state, props) => {
  const restaurantId = props.match.params.restaurantId;
  const restaurants = state.restaurants;
  const restaurant = restaurants.filter(val => {
    return val.id === restaurantId;
  })
  return {
    restaurantId,
    restaurant
  }
}

export default connect(mapStateToProps)(Restaurant);
