/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import Searchbar from './Searchbar';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

export class Restaurant extends React.Component {
  render() {
    const {restaurant: {name, rating, image_url, price, location: {display_address}, display_phone, id}} = this.props;

    return (
      <div className="restaurant-page">
        <h1>{name}</h1>
        <p className="rating">{rating}</p>
        <img src={image_url} alt=""/>
        <p className="price">{price}</p>
        <div className="address-container">
          <p>{display_address[0]}</p>
          <p>{display_address[1]}</p>
          <p>{display_phone}</p>
        </div>
        <div className="recipes-container">
            <Recipe restaurantId={id} />
            <RecipeForm restaurantId={id} />
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => {
  return {
    restaurant: state.selectRestaurant
  }
}

export default connect(mapStateToProps)(Restaurant);
