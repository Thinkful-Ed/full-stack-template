const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const restaurantSchema = mongoose.Schema({
  yelpId: {
    type: String,
    required: true,
    index: true
  },
  recipes: Array
})

restaurantSchema.statics = {
  findByYelpId(yelpId) {
    return this.findOne({yelpId});
  }
}

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
