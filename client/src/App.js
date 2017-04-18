import React, { Component } from 'react';
import './App.css';
import RegisterShelter from './components/registerShelter'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Header from './components/header';
import Search from './components/search';
import ShelterSignUp from './components/shelterSignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/search" component={Search} />
          <Route exact path="/shelters" component={RegisterShelter} />
          <Route exact path="/shelters/signup" component={ShelterSignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
