import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../actions'
import Link from 'react-router-dom';

export class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  onSearch(event){
    event.preventDefault();
      const searchValue = this.searchInput.value;
      const locationValue = this.locationInput.value;
      this.searchInput.value = '';
      this.locationInput.value = '';
  }
  componentDidMount() {
    // console.log(this.props.dispatch(fetchRestaurants()));
    return this.props.dispatch(fetchRestaurants())
  }


  render() {
    return(
      <form className="search-bar" onSubmit={e=>{this.onSearch(e)}}>
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

 })

module.exports = connect(mapStateToProps)(Searchbar);
