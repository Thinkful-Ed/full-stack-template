import React from 'react';
import {connect} from 'react-redux';
import {fetchSheltersData} from '../../actions';
import './search.css';
import PetProfile from '../petProfile';

export function Search(props) {
  
  function handleSearch(e) {
    e.preventDefault();
    props.dispatch(fetchSheltersData());
  }

  // map over props.shelters if the data has been retrieved already
  let animals = [];
  if (props.shelters.length > 0) {
    props.shelters.forEach((shelter, forEachIndex) => {
      let animalsCurr = shelter.animals.map((animal, index) => {
        return <PetProfile key={`${index}${forEachIndex}`} name={animal.name} type={animal.type} />
      });
      animals.push(animalsCurr);
    });

    animals = animals.reduce((flat, toFlatten) => {
      return flat.concat(toFlatten);
    }, []);
  }

  return (
    <div>

      <div className='search-container'>
        <div className='form-container'>
          <h2>Animal Search!</h2> 
          <form>

            <label htmlFor='type'>Seach by pet type</label><br />
            <input placeholder='Type of pet' type='text' id='type' /><br />

            <label htmlFor='zip'>Zip code</label><br />
            <input placeholder='Zip code' type='text' id='zip' /><br />

            <label htmlFor='shelter'>Shelter</label><br />
            <input placeholder='Shelter name' type='text' id='shelter' /><br />
            
            <input type='radio' name='radio' value="InNeed" />I'm looking for a pet in need<br />

            <button onClick={(e) => handleSearch(e)}>Search</button>

          </form>
        </div>
      </div>
      {animals}
    </div>
  );
}

const mapStateToProps = (state) => ({
  shelters: state.shelters.data
});

export default connect(mapStateToProps)(Search);