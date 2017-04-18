import React from 'react';
import Header from '../header';
import './shelterForms.css'

export default class ShelterForm extends React.Component{
  showLoginForm(){
    
  }
  render(){
    return(
      <div >
        <Header />
        <div className="shelterForm-container">
         <button onClick={()=> this.showLoginForm()}>Log In</button>
         <button>Sign Up</button>
        </div>
      </div>

    )
  }
}