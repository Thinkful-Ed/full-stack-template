import React from 'react';
import {connect} from 'react-redux';
// import {submitRecipe} from '../actions';
import Searchbar from './Searchbar';

export class RestaurantListing extends React.Component {
  // onSelect(event)
  //
  // }

  render() {
    const restaurantList = this.props.restaurants.map((resto, index) => {
           return ( <li key={index}>{resto}</li> )

    return (
      <div className="restaurant-container">
        <img src="" alt="" className="restaurant-img"/>
        <ul>{restaurantList}</ul>

      </div>
    )
  }
}

export const mapStateToProps = state => ({
  restaurants: state.restaurants
})

module.exports = connect(mapStateToProps)(RestaurantListing);
