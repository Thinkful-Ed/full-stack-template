const DATABASE_URL = process.env.DATABASE_URL || 
global.DATABASE_URL || 'mongodb://localhost/pet-adoption-app'
|| '< insert mongo mlab connection string here >';

module.exports = {DATABASE_URL};