import React from 'react';

export class AddRecipe extends React.Component {
  onAdd(event){
    event.preventDefault();
    const recipeValue = this.recipeInput.value;
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

export default AddRecipe;
