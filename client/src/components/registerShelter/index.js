import React from 'react';
import Header from '../header';
import './registerShelter.css'

export default class RegisterShelter extends React.Component{
  handleRegister(event){
    event.preventDefault();
    console.log(event.target.map(item => item))
  }
  render(){
    return(
      <div>
      <Header />
        <div className="register-container">
          <h2>Register Shelter</h2>
          <form onSubmit={(e)=> this.handleRegister(e)}>
            <label htmlFor="name"></label><br />
            <input id="name" placeholder="Name" /><br />

            <label htmlFor="email"></label><br />
            <input id="email" placeholder="Email" /><br />

            <label htmlFor="type"></label><br />
            <input id="type" placeholder="Type" /><br />

            <label htmlFor="Location"></label><br />
            <input id="location" placeholder="Location" /><br />

            <label htmlFor="address"></label><br />
            <input id="address" placeholder="Address" /><br />

            <label htmlFor="city"></label><br />
            <input id="city" placeholder="City" /><br />

            <label htmlFor="zipcode"></label><br />
            <input id="zipcode" placeholder="Zipcode" /><br />

            <label htmlFor="password"></label><br />
            <input id="password" placeholder="Passord" /><br />

            <button>Submit</button>
            
          </form>
        </div>
      </div>
    )
  }
}