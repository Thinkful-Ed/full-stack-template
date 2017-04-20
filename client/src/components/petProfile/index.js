import React from 'react';
import {Link} from 'react-router-dom';
import {PetProfileFull} from '../petProfileFull';
import './petProfile.css';
import {connect} from 'react-redux';
import {deleteAnimal} from '../../actions';

export function PetProfile(props) {

  function getBtn() {
    if (props.dashboardView) {
      return <button onClick={(e) => removeAnimal(e)}>Remove</button>;
    }
  }

  function getShelterInfo() {
    if (!props.dashboardView) {
      return <p>Shelter: {props.shelter}</p>;
    }
  }

  function getAnimalName() {
     if (props.dashboardView) {
      return <h3>Name: {props.name}</h3>;
     } 
     else {
      return <h3><Link to={`/search/${props.petId}`}>Name: {props.name}</Link></h3>;
     }
  }

  function removeAnimal(e) {
    const animalId = props.animals[props.index]._id;
    props.dispatch(deleteAnimal(props.shelterId, animalId));
  }

  return (
    <div className='pet-profile'>
      <img className="dummy-image" alt="Pet"/>
        <div className="info">
          {getAnimalName()}
          <p>Type: {props.type}</p>
          {getShelterInfo()}
          <p>This animal needs a home</p> 
        </div>
        <div className="editing">
          {getBtn()}
        </div>       
    </div>

  );
}

const mapStateToProps = (state) => ({
  animals: state.logIn.loggedInShelter.animals
});

export default connect(mapStateToProps)(PetProfile);