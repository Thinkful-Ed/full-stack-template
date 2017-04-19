import React from 'react';
import './petProfileFull.css';
import { connect } from 'react-redux';

export function PetProfileFull(props) {
  console.log(props.shelters);
  let animalObj;
  props.shelters.forEach(shelter => {
    shelter.animals.forEach(animal => {
      if (props.match.params.id === animal._id) {
        animalObj = animal;
      }
    })
  })
  return(
    <div className="pet-profile-container">
      <div className="general-info">
        <div className="dummy-container">
          <img className="dummy-image-full"/>
        </div>
        <div className="stats">
          <h1>Name: {animalObj.name}</h1>
          <p>Age: {animalObj.age}</p>
          <p>Shelter:</p>
          <p>Location: </p>
          <p>Status: {animalObj.status}</p>
          <p>Additional Info: </p>
          <p className="blurb">This is a sweet and caring pet that needs a home!</p>
        </div>
      </div>
      <div className="history">
        <h3>History</h3>
          <p>
            Ne quaeque fabulas incorrupte sea, quo ne falli latine. Eam autem graeco tritani ei. Sea neglegentur definitionem ad, id vim aeque laboramus pertinacia. Graeco iisque eu eos, vis cibo prima principes ut
          </p>
          <p>
            Lorem ipsum dolor sit amet, his quando voluptatum liberavisse ex, epicuri constituto signiferumque ad sit. Ne quaeque fabulas incorrupte sea, quo ne falli latine. Eam autem graeco tritani ei. Sea neglegentur definitionem ad, id vim aeque laboramus pertinacia. Graeco iisque eu eos, vis cibo prima principes ut
          </p>
        </div>
    </div>

  )
}
const mapPropsToState = state => ({
  shelters: state.shelters.data
})

export default connect(mapPropsToState)(PetProfileFull)