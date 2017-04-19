import React from 'react';
import './petProfile.css';

export default function PetProfile(props) {
  return (
    <div className='pet-profile'>
      <img className="dummy-image" alt="Pet"/>
        <div className="info">
          <h3>Name: {props.name}</h3>
          <p>Type: {props.type}</p>
          <p>This animal needs a home</p> 
        </div>
        <div className="editing">
          <button>Update</button>
          <button>Remove</button>
        </div>       
    </div>
  );
}