import React from 'react';
import './shelterLogIn.css'

import {connect} from 'react-redux';
import {fetchLogInData} from '../../actions';

export class ShelterLogIn extends React.Component {

  handleLogIn(event) {
    event.preventDefault();
    this.props.dispatch(fetchLogInData(this.email.value, this.password.value));
  }

  render() {
    return (
      <div className='log-in-container'>
        <h2>Shelter Log In</h2>
        <h4>Please enter your credentials to access your account</h4>
        <form onSubmit={(e)=> this.handleLogIn(e)}>

          <label htmlFor="email">Email</label><br />
          <input id="email" placeholder="Email" ref={email => this.email = email} /><br />

          <label htmlFor="password">Password</label><br />
          <input id="password" placeholder="Password" ref={password => this.password =  password} /><br />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(ShelterLogIn);