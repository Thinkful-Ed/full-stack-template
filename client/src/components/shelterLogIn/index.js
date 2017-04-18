import React from 'react';
import './shelterLogIn.css'

export default class ShelterLogIn extends React.Component {

  handleLogIn(event) {
    event.preventDefault();
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

/*
<label htmlFor="email"></label><br />
<input id="email" placeholder="Email" ref='email' /><br />

<label htmlFor="password"></label><br />
<input id="password" placeholder="Password" ref='password' /><br />
*/