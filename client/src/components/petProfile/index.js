import React from 'react';
import './petProfile.css';
import {connect} from 'react-redux';
import {deleteAnimal} from '../../actions';

export function PetProfile(props) {

  function removeAnimal(e) {
    const animalId = props.animals[props.index]._id;
    props.dispatch(deleteAnimal(props.shelterId, animalId));
  }

  return (
    <div className='pet-profile'>
      <img className="dummy-image" alt="Pet"/>
        <div className="info">
          <h3>Name: {props.name}</h3>
          <p>Type: {props.type}</p>
          <p>This animal needs a home</p> 
        </div>
        <div className="editing">
          <button onClick={(e) => removeAnimal(e)}>Remove</button>
        </div>       
    </div>
  );
}

const mapStateToProps = (state) => ({
  animals: state.logIn.loggedInShelter.animals
});

export default connect(mapStateToProps)(PetProfile);