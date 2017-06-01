import React from 'react';
import {connect} from 'react-redux';
import {submitRecipe, fetchRecipes} from '../actions';

class Recipe extends React.Component {
  // onAdd(event) {
  //   event.preventDefault();
  //   const recipeValue = this.recipeInput.value;
  //   this.props.dispatch(submitRecipe(recipeValue));
  //   this.recipeInput.value = '';
  // }
  componentDidMount(){
    this.props.dispatch(fetchRecipes(this.props.restaurantId))
  }
  render() {
    const testArray = ['Hello', 'Goodbye', 'See you soon']
    const liTest = testArray.map((item, index) => {
      return <li key={index}>{item}</li>
    })
    return (
      <ul>{liTest}</ul>
    )  }
}

export default connect()(Recipe);
