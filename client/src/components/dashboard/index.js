import React from 'react';
import './dashboard.css';
import PetProfile from '../petProfile';
import {connect} from 'react-redux';
import {fetchAddNewAnimal} from '../../actions';

export class ShelterDashboard extends React.Component{
 
  handleAddAnimal(event){
    event.preventDefault();   
  }
 
  render(){
    return(
      <div>
        <div className="dash-container">
            <h1>Welcome to your Dashboard</h1>
            <h3>{this.props.shelter.name}</h3>
            <p>{this.props.shelter.location}</p>
            <p><b>Shelter type: {this.props.shelter.type}</b></p>
            <h3>Featured Animals</h3>
            <button>Add an animal</button>
        </div>

      </div>
    )
  }
} 

const mapStateToProps = (state) => ({
  id: state.logIn.loggedInShelter.id,
  shelter: state.logIn.loggedInShelter
});

export default connect(mapStateToProps)(ShelterDashboard);