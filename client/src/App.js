import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Header from './components/header';
import Search from './components/search';
import RegisterShelter from './components/registerShelter'
import ShelterSignUp from './components/shelterSignUp';
import ShelterLogIn from './components/shelterLogIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/search" component={Search} />
          <Route exact path="/shelters" component={RegisterShelter} />
          <Route exact path="/shelters/signup" component={ShelterSignUp} />
          <Route exact path="/shelters/login" component={ShelterLogIn} />
        </div>
      </Router>
    );
  }
}

export default App;
