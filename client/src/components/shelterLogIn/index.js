import React from 'react';
import './shelterLogIn.css'

import {connect} from 'react-redux';
import {fetchLogInData} from '../../actions';

export class ShelterLogIn extends React.Component {

  handleLogIn(event) {
    event.preventDefault();
    console.log(this.refs.id.value);
    this.props.dispatch(fetchLogInData(this.refs.id.value));
  }

  render() {
    return (
      <div className='log-in-container'>
        <h2>Shelter Log In</h2>
        <form onSubmit={(e)=> this.handleLogIn(e)}>

          <label htmlFor="login">Shelter Id</label><br />
          <input id="login" placeholder="Shelter Id" ref='id' /><br />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(ShelterLogIn);

/*
<label htmlFor="email"></label><br />
<input id="email" placeholder="Email" ref='email' /><br />

<label htmlFor="password"></label><br />
<input id="password" placeholder="Password" ref='password' /><br />
*/