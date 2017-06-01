/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {submitRecipe, fetchRecipes} from '../actions';

class Recipe extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchRecipes(this.props.restaurantId))
  }
  render() {
    console.log(this.props);
    console.log(this.props.recipes);
    const recipesList = this.props.recipes.map((recipe, index) => {
      return <li key={index}>{recipe.name}</li>
    })
    return (
      <ul>{recipesList}</ul>
    )  }
}
export const mapStateToProps = (state, props) => ({
  recipes: state.currentRecipes.recipes
})

export default connect(mapStateToProps)(Recipe);
