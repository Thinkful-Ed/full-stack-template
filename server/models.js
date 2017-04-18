const mongoose = require('mongoose');


const shelterSchema = mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    zipcode: {type: String, required: true},
    state: {type: String, required: true},
    type: {type:String },
    animals: [{
        type: {type: String},
        name: {type: String},
        age: {type: String},
        status: {type: String},
        additionalInfo: {type: String}
    }]
})
// Define static and instance methods
// Example
shelterSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
}

shelterSchema.virtual('locationString').get(function(){
    return `${this.address} ${this.state}, ${this.zipcode}`.trim()
});
shelterSchema.methods.apiRepr = function() {
    return {
        id: this.id,
        name: this.name,
        location: this.locationString,
        type: this.type,
        additionalInfo: this.additionalInfo
        
    }
}

// Exmaple
// userSchema.methods.apiRepr = function() {
//     return {
//         id: this._id,
//         firstName: this.firstName,
//         lastName: this.lastName,
//         fullName: this.fullName,
//         favorites: this.favorites
//     };
// }

shelterSchema.methods.validatePassword = function(inputPw) {
    return bcrypt.compare(inputPw, this.password);
}


const Shelter = mongoose.model('shelters', shelterSchema);

module.exports = { Shelter };