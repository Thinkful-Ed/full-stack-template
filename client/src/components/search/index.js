import React from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {fetchAnimalData} from '../../actions';
import './search.css';
import PetProfile from '../petProfile';

export function Search(props) {
  
  function handleSearch(e) {
    e.preventDefault();
    props.dispatch(fetchAnimalData());
  }

  // map over props.animals

  return (
    <div>

      <Header />
      <div className='search-container'>
        <div className='form-container'>
          <h2>Animal Search!</h2> 
          <form>

            <label htmlFor='animal'>Seach by pet type</label><br />
            <input placeholder='Animal type' type='text' id='animal' /><br />

            <label htmlFor='zip'>Zip code</label><br />
            <input placeholder='Zip code' type='text' id='zip' /><br />

            <label htmlFor='shelter'>Shelter</label><br />
            <input placeholder='Shelter name' type='text' id='shelter' /><br />
            
            <input type='radio' name='radio' value="InNeed" />I'm looking for a pet in need<br />

            <button onClick={(e) => handleSearch(e)}>Search</button>

          </form>
        </div>
      </div>

    </div>
  );
}

export default connect()(Search);