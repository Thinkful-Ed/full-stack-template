import React from 'react';

import './petprofile.css';

export default function PetProfile(props) {
  return (
    <div className='pet-profile'>
      <h3>props.name</h3>
      <p>props.type</p>    
    </div>
  );
}