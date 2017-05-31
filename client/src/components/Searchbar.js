import React from 'react';
import {connect} from 'react-redux';
import {FETCH_RESTAURANT_REQUEST, FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_FAILURE, fetchRestaurants} from '../actions'
import Link from 'react-router-dom';

export class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(event){
    event.preventDefault();
    const query = {
      search: this.searchInput.value,
      location: this.locationInput.value
    }
    this.form.reset();
    return this.props.dispatch(fetchRestaurants(query))
  }


  render() {

    return(
      <form ref={form => this.form = form} className="search-bar" onSubmit={e=>{this.onSearch(e)}}>
        <label htmlFor="search-input">Find</label>
        <input type="text" id="search-input" placeholder="tacos, cheap dinner, The Brook" required
                ref={input => this.searchInput = input} />
        <label htmlFor="location-input">Near</label>
        <input type="text" id="location-input" placeholder="Tulsa, OK" required
                ref={input => this.locationInput = input} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

 export const mapStateToProps = state => ({
   restaurants: state.restaurants
 })

export default connect(mapStateToProps)(Searchbar);
