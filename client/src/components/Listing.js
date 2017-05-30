import React from 'react';

export default function Listing(props) {
    const restaurants = props.restaurants.map((restaurant, index) =>
        <li key={index}>
            <strong>{restaurant.id}</strong>
          </li>
    );
    return (
        <ul className="restaurant-list">
            {restaurants}
        </ul>
    );
}
