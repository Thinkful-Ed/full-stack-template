import React from 'react';
import {connect} from 'react-redux';
import {submitRecipe} from '../actions';

export class Recipe extends React.Component {
  onAdd(event)
    event.preventDefault();
    const recipeValue = this.recipeInput.value;
    this.props.dispatch(submitRecipe(recipeValue));
    this.recipeInput.value = '';
  }

  render() {
    return (
      <form onSubmit={e=>{this.onAdd(e)}}>
        <textarea ref={input => this.recipeInput = input} placeholder="Recipe"></textarea>
        <button type="submit">Submit Recipe</button>
      </form>
    )
  }
}

export const mapStateToProps = state => ({

})

module.exports = connect(mapStateToProps)(Recipe);
