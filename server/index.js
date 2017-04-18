const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const {DATABASE_URL} = require('./config');
const {Shelter} = require('./models');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

const app = express();

// API endpoints go here!
app.get('/api', (req, res) => {
    Shelter
     .find({})
     .exec()
     .then(data => {
        return res.status(200).json(data);
     })
     .catch(err => res.status(500).json({error: err}))
});

app.post('/api', jsonParser, (req, res) => {
    console.log(req.body);
    // Does the shelter already exist in the database?
    return Shelter
     .count({name: req.body.name}).exec()
     .then(count => {
        if (count > 0) {
          let message = `Shelter ${req.body.name} already exists`;
          console.error(message);
          return res.status(404).json({message: message});
        }
        return Shelter.hashPassword(req.body.password);
     })
     .then(hash => {
         return Shelter.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            address: req.body.address,
            zipcode: req.body.zipcode,
            state: req.body.state,
            type: req.body.type,
            animals: []
         });
     })
     .then(newShelter => {
         return res.status(201).json(newShelter.apiRepr());
     })
     .catch(err => {
         console.error(err);
    });
});

app.get('/api/login/:id', (req, res) => {
	return Shelter
		.findById(req.params.id)
		.exec()
		.then(shelter => {
			return res.status(200).json(shelter.apiRepr());
		})
		.catch(error => res.status(400).json(error));
});

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    // we need to use mongoose.connect to connect to an mlab mongo server
    // seed the seed data into the mlab datbase
    return new Promise((resolve, reject) => {
        mongoose.connect(DATABASE_URL, err => {
        if (err) {
            return reject(err);
        } 
        server = app.listen(port, () => {
            resolve();
        })
        .on('error', err => {
            reject(err)
        });
      });
    }); 
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}


// exports.DATABASE_URL = process.env.DATABASE_URL ||
//                        global.DATABASE_URL ||
//                       'mongodb://localhost/pet-adoption-app';
// exports.PORT = process.env.PORT || 3001;

module.exports = {
    app, runServer, closeServer
};
