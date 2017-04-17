import React from 'react';

import Header from '../header';

import './search.css';

export default function Search(props) {
  return (
    <div>

      <Header />
      <div className='search-container'>
        <div className='form-container'>
          <h2>Animal Search!</h2> 
          <form>

            <label for='animal'>Seach by pet type</label><br />
            <input placeholder='Animal type' type='text' id='animal' /><br />

            <label for='animal'>Zip code</label><br />
            <input placeholder='Zip code' type='text' /><br />

            <label for='animal'>Shelter</label><br />
            <input placeholder='Shelter name' type='text' /><br />
            
            <input type='radio' name='radio' value="InNeed" />I'm looking for a pet in need<br />

            <button>Search</button>

          </form>
        </div>
      </div>

    </div>
  );
}