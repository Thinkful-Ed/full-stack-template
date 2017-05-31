/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import RestaurantListing from './components/RestaurantListing';
import './App.css';
import Searchbar from './components/Searchbar';
import {connect} from 'react-redux';

export function App(props) {
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

const mapStateToProps = state => ({
  restaurants: state.restaurants
})

export default connect(mapStateToProps)(App);
