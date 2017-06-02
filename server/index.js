const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const fetch = require('node-fetch');
const {DATABASE_URL} = require('./config.js');
const {Restaurant} = require('./models/restaurant.model');
const YelpToken = '../client/src/utils/constants/yelp.config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.Promise = global.Promise;
const opts = {
  headers: {
    authorization: `Bearer ZF5anEzfvnW_pT1faLLDqXE1bWymfnnbGxFtsxYF8dBOFlCp8vbtdU4ywIxK1xdNcfiuV7spk_SDvGUyKFPFsubVc_ezBoxhEIXCHvhfYEYkfX0_xFc7MO9fCwAuWXYx`
  }
}

app.get('/api/yelp', (req, res, next) => {
  fetch(`https://api.yelp.com/v3/businesses/search?term=${req.query.search}&location=${req.query.location}`, opts).then(data => {
    return data.json();
  }).then(data => {
    return res.json(data)
  });
})
app.post('/api/restaurants', (req, res) => {
	if((Restaurant.find({'yelpId': req.body.yelpId}).count()) > 0) {
		throw new Error('Woah kid, that\'s already an entry');
	}
	else {
		const {name, ingredients, instructions, cookingTime} = req.body.recipes[0]
		Restaurant
			.create({
				yelpId: req.body.yelpId,
				recipes: [{
					name: name,
					ingredients: ingredients,
					instructions: instructions,
					cookingTime: cookingTime
				}]
			})
			.then(restaurant => {
				res.status(201).json(restaurant.apiRepr());
			})
			.catch(err => {
				res.status(500).json({error: '⛔ You really did it now ⛔'})
			})
	}
})

app.put('/api/restaurants/:restaurantId', (req, res) => {
    // Restaurant
		// 	.findOneAndUpdate({yelpId: req.params.restaurantId}, {$set: req.body})
		// 	.exec()
		// 	.then(restaurant => {
    //     console.log(restaurant);
    //   restaurant.recipes.push(req.body)
		// 	return restaurant.save();
    // }).then(restaurant => {
    //   res.status(201).json(restaurant);
    // }).catch(err => {
    //   res.status(500).json({error: '⛔ You really did it now ⛔'})
    // })
    console.log(req.params.restaurantId);
    Restaurant
      .findOneAndUpdate({yelpId: req.params.restaurantId},
                        {$push: {"recipes": req.body}},
                        {safe: true, upsert: true},
    function(err, model) {
      if(err) {
        res.send(err);
      }
      Restaurant
        .findOne({yelpId: req.params.restaurantId}, function(err, doc) {
          if(err) {
            res.send(err);
          }
          res.json(doc);
        })
    }
  );
})

// app.put('/api/restaurants', (req, res) => {
// 	if((Restaurant.find({'yelpId': req.body.yelpId}).count()) > 0) {
// 		// throw new Error('Woah kid, that\'s already an entry');
// 		res.status(500);
// 	}
// 	else {
// 		const {name, ingredients, instructions, cookingTime} = req.body.recipes[0];
// 		Restaurant
// 			.findOneandUpdate(
// 				{yelpId: req.body.yelpId},
// 				{$set: {recipes: [ name, ingredients, instructions, cookingTime ]}
// 			})
// 			.then(restaurant => {
// 				res.status(201).json(restaurant.apiRepr());
// 			})
// .catch(err => {
// 	res.status(500).json({error: '⛔ You really did it now ⛔'})
// 			})
// 		}
// })

app.get('/api/restaurants/:id', (req, res) => {
  Restaurant
    .findByYelpId(req.params.id).then(data => {
    res.status(200).json(data);
  }).catch(err => res.status(400))
})

app.delete('/api/restaurants/:id', (req, res) => {
  Restaurant.findByIdAndRemove(req.params.id).then(() => {
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
function runServer(databaseUrl = DATABASE_URL, port = 3001) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      }).on('error', err => { + mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app,
  runServer,
  closeServer
};
