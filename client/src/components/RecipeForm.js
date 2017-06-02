/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {submitRecipe} from '../actions'
import Link from 'react-router-dom';

export class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this)
  }

  onAdd(event){
    event.preventDefault();
    const recipeInput = {
      name: this.recipeName.value,
      ingredients: this.ingredients.value,
      instructions: this.instructions.value,
      cookingTime: this.cookingTime.value,
      photo: this.photo.value
    }
    this.form.reset();
    return this.props.dispatch(submitRecipe(recipeInput, this.props.restaurantId))
  }

  render() {

    return(
      <form ref={form => this.form = form} className="recipe-form" onSubmit={e => this.onAdd(e)}>
        <label htmlFor="recipe-name">Recipe Name</label>
        <input type="text" className="recipe-name" placeholder="Paella" required
                ref={input => this.recipeName = input} />
        <label htmlFor="ingredients">Ingredients</label>
        <textarea className="ingredients" ref={(input) => this.ingredients=input} placeholder="1 leek, 300g long grain rice, 1l fish stock"></textarea>
        <label htmlFor="instructions">Instructions</label>
        <textarea className="instructions" ref={(input) => this.instructions=input} placeholder="Heat the oil in a deep frying pan, then soften the leek for 5 mins without browning..."></textarea>
        <label htmlFor="cooking-time">Cook Time in mins</label>
        <input type="number" className="cooking-time" placeholder="30"
                ref={input => this.cookingTime = input} />
        <label htmlFor="photo">Photo URL</label>
        <input type="text" className="photo" placeholder="http://stockphoto.com"
                ref={input => this.photo= input} />
        <button type="submit">Add Recipe!</button>
      </form>
    )
  }
}

 export const mapStateToProps = state => ({
    recipes: state.currentRecipes.recipes,
    haveRecipe: state.haveRecipe
 })

export default connect(mapStateToProps)(RecipeForm);
