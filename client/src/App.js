/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import RestaurantListing from './components/RestaurantListing';
import './App.css';
import Searchbar from './components/Searchbar';

export default function App(props) {
  return (
    <Router>
      <div>
        <Searchbar/>
        <Route exact path="/:restaurant" component={RestaurantListing}/>
        <Route exact path="/:restaurantId" component={RestaurantListing}/>

      </div>
    </Router>
  )
}
