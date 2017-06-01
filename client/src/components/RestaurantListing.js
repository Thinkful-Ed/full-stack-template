/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
// import {submitRecipe} from '../actions';
import Searchbar from './Searchbar';
import {Link} from 'react-router-dom';
import './restaurantListing.css';

export class RestaurantListing extends React.Component {

  render() {
    const restaurantList = this.props.restaurants.map((restaurant, index) => {
      return (
        <Link key={index} to={`/${restaurant.id}`}>
          <li className="restaurant-container">
            <img src={restaurant.image_url} />
            <p>{restaurant.name}</p>
            <p>{restaurant.price}</p>
            <p>{restaurant.rating}</p>
            <div className="address">
                <p>{restaurant.location.display_address[0]}</p>
                <p>{restaurant.location.display_address[1]}</p>
                <p>{restaurant.display_phone}</p>
            </div>
          </li>
        </Link>
      )
    })

    return (
        <ul>{restaurantList}</ul>
    )
  }
}

export const mapStateToProps = state => ({restaurants: state.restaurants})

export default connect(mapStateToProps)(RestaurantListing);
