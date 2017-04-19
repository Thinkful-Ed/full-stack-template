import React from 'react';
import {Link} from 'react-router-dom';
import {PetProfileFull} from '../petProfileFull';
import './petProfile.css';

export default function PetProfile(props) {
  return (
    <div className='pet-profile'>
      <img className="dummy-image" alt="Pet"/>
        <div className="info">
          <h3><Link to={`/search/${props.petId}`}>Name: {props.name}</Link></h3>
          <p>Type: {props.type}</p>
          <p>Shelter: {props.shelter}</p>
          <p>This animal needs a home</p> 
        </div>
        <div className="editing">
          <button>Update</button>
          <button>Remove</button>
        </div>     
    </div>

  );
}