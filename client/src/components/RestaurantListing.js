/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {submitRecipe} from '../actions';

export class Recipe extends React.Component {

  render() {
    return (
      <div className="restaurant-container">
        <img src="" alt="" className="restaurant-img"/>

      </div>
    )
  }
}

export const mapStateToProps = state => ({

})

module.exports = connect(mapStateToProps)(Recipe);
