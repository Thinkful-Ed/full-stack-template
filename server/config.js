const DATABASE_URL = process.env.DATABASE_URL || 
global.DATABASE_URL || 'mongodb://localhost/pet-adoption-app'
|| '<ramon>:<password>@ds163010.mlab.com:63010/pet-adoption-app';

module.exports = {DATABASE_URL};