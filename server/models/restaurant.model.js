const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const restaurantSchema = mongoose.Schema({
  yelpId: {
    type: String,
    required: true
  },
  recipes: [{
    name: {
      type: String,
      required: true
    },
    ingredients: {
      type: Array,
      required: true
    },
    instructions: {
      type: String,
      required: true
    },
    cookingTime: {
      type: Number
    },
    photo: {
      type: String
    },
    created: {
      type: Date,
      default: Date.now
    }
  }]
})

restaurantSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    yelpId: this.yelpId,
    name: this.recipes.name,
    ingredients: this.recipes.ingredients,
    instructions: this.recipes.instructions
  }
}

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = {Restaurant};
