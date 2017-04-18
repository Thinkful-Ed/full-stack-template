const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const {DATABASE_URL} = require('./config');
const {Shelter} = require('./models');

mongoose.Promise = global.Promise;

const app = express();
const test = {
  "shelter": "Caring Kelley's Animal Shelter",
  "location": "California",
  "address": "123 Dummy Street",
  "zipcode": 123456,
  "type": "dogs",
  "animals": ["Inky", "Pinky", "Blinky", "Clide"]
}

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

// Example =======

// let server;
// function runServer(databaseUrl=DATABASE_URL, port=PORT) {
//   return new Promise((resolve, reject) => {
//     mongoose.connect(databaseUrl, err => {
//       if (err) {
//         return reject(err);
//       }
//       server = app.listen(port, () => {
//         console.log(`You are listening on port ${port}`);
//         resolve();
//       })
//       .on('error', err => {
//         reject(err);
//       });
//     });
//   });
// }

// =============

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
