import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import {connect} from 'react-redux';

export function App(props) {
  return (
    <div>
      <Searchbar/>
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
})

export default connect(mapStateToProps)(App);
