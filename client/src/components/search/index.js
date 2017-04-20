import React from 'react';
import {connect} from 'react-redux';
import {fetchSheltersData} from '../../actions';
import './search.css';
import PetProfile from '../petProfile';

export class Search extends React.Component {

  handleSearch(e) {
    e.preventDefault();
    this.props.dispatch(fetchSheltersData(this.inputType.value, this.inputZip.value));
  }

  // map over props.shelters if the data has been retrieved already
  getAnimals() {
    let animals = [];
    if (this.props.shelters.length > 0) {
      this.props.shelters.forEach((shelter, forEachIndex) => {
        let animalsCurr = shelter.animals.map((animal, index) => {
          return <PetProfile petId={animal._id} key={`${index}${forEachIndex}`} index={index} 
          name={animal.name} type={animal.type} dashboardView={false}
          shelter={shelter.name || shelter.shelter} />
        });
        animals.push(animalsCurr);
      });

      animals = animals.reduce((flat, toFlatten) => {
      return flat.concat(toFlatten);
      }, []);

      //Filter animals here...
      return animals
    }
  }

  render() {
    return (
      <div>

        <div className='search-container'>
          <div className='form-container'>
            <h2>Animal Search!</h2> 
            <form>

              <label htmlFor='type'>Seach by pet type</label><br />
              <input placeholder='Type of pet' type='text' id='type' ref={input => this.inputType = input} /><br />

              <label htmlFor='zip'>Zip code</label><br />
              <input placeholder='Zip code' type='text' id='zip' ref={input => this.inputZip = input} /><br />

              <button onClick={(e) => this.handleSearch(e)}>Search</button>

            </form>
          </div>
        </div>
        {this.getAnimals()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shelters: state.shelters.data,
  filterType: state.shelters.filterType,
  filterZip: state.shelters.filterZip
});

export default connect(mapStateToProps)(Search);