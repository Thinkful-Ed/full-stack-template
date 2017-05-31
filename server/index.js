const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const {Restaurants} = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

// API endpoints go here!
app.get('/restaurants', (req, res) => {
  Restaurants
    .find()
    .then(restaurant => {
      res.json(restaurants.map(restaurant => restaurant.apiRepr()));
    })
    .catch(err => {
      console.error(err));
      res.status(500).json({error: 'something went awry'});
    });
});

app.get('/restaurants/:id', (req, res) => {
  Restaurants
    .findById(req.params.id)
    .then(restaurant => res.json(restaurant.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went awry'});
    });
});

app.post('/restaurants', (req, res) => {
  const requiredFields = ['yelpId', 'recipes', 'ingredients', 'instructions'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Restaurant
    .create({
      yelpId: req.body.yelpId,
      recipes: req.body.recipes,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    })
    .then(restaurant => res.status(201).json(restaurant.apiRepr()))
    .catch(err => {
        console.error(err);
        res.status(500).json({error: 'Something went awry'});
    });
});

app.put('/restaurants/:id', (req, res) => {
  if (req.params.id !== req.body.id) {
    const message = (
      `Request path id (${req.params.id}) and request body id `
      `(${req.body.id}) must match`);
    console.error(message);
    return res.status(400).send(message);
  }

  const updated = {};
  const updatedFields = ['yelpId', 'recipes', 'ingredients', 'instructions'];
  updatedFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  Restaurant
    .findByIdAndUpdate(req.params.id, {$set: updated}, {new: true})
    .then(updatedRestaurant => res.status(201).json(updatedRestaurant.apiRepr()))
    .catch(err => res.status(500).json({message: 'Something went awry'}));
});

app.delete('/restaurants/:id', (req, res) => {
  Restaurant
    .findByIdAndRemove(req.params.id)
    .then(() => {
      console.log(`Deleted restaurant with id \`${req.params.id}\``);
      res.status(204).end();
    });
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
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
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

module.exports = {
    app, runServer, closeServer
};
