import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/header';
import Search from './components/search';
import RegisterShelter from './components/registerShelter'
import ShelterSignUp from './components/shelterSignUp';
import ShelterLogIn from './components/shelterLogIn';
import ShelterDashboard from './components/dashboard';
import PetProfileFull from './components/petProfileFull';
import Home from './components/home';

class App extends Component {

  handleLogIn(hasAccount) {
    console.log(this.props.logIn.loggedInShelter);
    if (this.props.logIn.loggedInShelter) {
      return <Redirect to={`/shelters/login/${this.props.logIn.loggedInShelter.id}`} />;
    }
    else if (hasAccount) {
      return <ShelterLogIn />;
    }
    else {
      return <ShelterSignUp />;
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/shelters" component={RegisterShelter} />
          <Route exact path="/shelters/signup" component={() => this.handleLogIn(false)} />
          <Route exact path="/shelters/login/:id" component={ShelterDashboard} />
          <Route exact path="/shelters/login" component={() => this.handleLogIn(true)} />
          <Route exact path="/search/:id" component={PetProfileFull} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  logIn: state.logIn
});

export default connect(mapStateToProps)(App);
