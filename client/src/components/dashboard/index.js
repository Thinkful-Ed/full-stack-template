import React from 'react';
import './dashboard.css';
import PetProfile from '../petProfile';
import {connect} from 'react-redux';
import {toggleAddPet} from '../../actions';
import AddPet from '../addPet'

export class ShelterDashboard extends React.Component{
 
  makePetProfiles() {
    if (this.props.shelter.animals.length > 0) {
      const animalProfiles = this.props.shelter.animals.map((animal, index) => {
        return <PetProfile key={index} index={index} name={animal.name} type={animal.type} 
                shelterId={this.props.id} dashboardView={false} />;
      });
      return animalProfiles;
    }
  }

  getAddPetForm() {
      console.log(this.props);
      if (this.props.toggleAddPet) {
        return <AddPet />;
      } 
      else {
        return <button onClick={(e)=> this.toggleAddPetForm(e)}>Add an animal</button>;
      } 
    }

  toggleAddPetForm(event){
    this.props.dispatch(toggleAddPet());   
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
            {this.getAddPetForm()}
        </div>
        {this.makePetProfiles()}
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({
  id: state.logIn.loggedInShelter.id,
  shelter: state.logIn.loggedInShelter,
  toggleAddPet: state.toggleAddPet
});

export default connect(mapStateToProps)(ShelterDashboard);