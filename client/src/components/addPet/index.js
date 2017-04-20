import React from 'react'
import {connect} from 'react-redux';
import {fetchAddNewAnimal} from '../../actions';
import {toggleAddPet} from '../../actions';

export class AddPet extends React.Component {

  handleAddPet(event){
    const newAnimal = {
      type: this.refs.type.value,
      name: this.refs.name.value,
      age: this.refs.age.value,
      status: this.refs.status.value,
      additionalInfo: this.refs.additionalInfo.value
    };
    console.log(newAnimal);
    event.preventDefault();
    this.props.dispatch(toggleAddPet());
    this.props.dispatch(fetchAddNewAnimal(this.props.id, newAnimal));
    this.refs.name.value = '';
    this.refs.name.value = '';
    this.refs.age.value = '';
    this.refs.status.value = '';
    this.refs.additionalInfo.value = '';
  }

  render(){
    return(
      <div >
        <div className="add-pet-container">
          <h2>Add Pet</h2>
          <form onSubmit={(e)=> this.handleAddPet(e)}>
            <label htmlFor="type"></label><br />
            <input type="text" id="type" placeholder="Type" ref="type" /><br />

            <label htmlFor="name"></label><br />
            <input type="text" id="name" placeholder="Name" ref="name" /><br />

            <label htmlFor="age"></label><br />
            <input type="text" id="age" placeholder="Age" ref="age" /><br />

            <label htmlFor="status"></label><br />
            <input type="text" id="status" placeholder="Status" ref="status"/><br />

            <label htmlFor="additionalInfo"></label><br />
            <input type="text" id="additionalInfo" placeholder="Additional Info" ref="additionalInfo" /><br />

            <button>Submit</button>
            <button onClick={(e)=> this.props.dispatch(toggleAddPet()) }>Cancel</button>

          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.logIn.loggedInShelter.id,
  shelter: state.logIn.loggedInShelter,
  toggleAddPet: state.toggleAddPet
});

export default connect(mapStateToProps)(AddPet);