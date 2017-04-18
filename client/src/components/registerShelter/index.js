import React from 'react';
import './registerShelter.css';
import {Link} from 'react-router-dom';

export default function RegisterShelter(props) {
  return (
    <div >
      <div className="btn-container">
        <div className='log-in'>
          <h4>Already have an adoptme account?</h4>
          <Link to='/shelters/login'><button>Log In</button></Link>
        </div>
        <div className='sign-up'>
          <h4>Ready to sign up your shelter?</h4>
          <Link to='/shelters/signup'><button>Sign Up</button></Link>
        </div>
      </div>
    </div>
  );
}