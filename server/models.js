// require mongoose
// require bcrypt

// Define the Shelter Schema

// Define static and instance methods
// Example
shelterSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
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