const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Listings = require('../db/models/listings.js');
const Users = require('../db/models/users.js');

// separate it later

mongoose.connect('mongodb://localhost/photocarousel', { useUnifiedTopology: true });

const app = express();
const PORT = 8080;

const PATH = path.join(__dirname, '..', 'public/');

app.use(bodyParser.json());


app.use('/', express.static(PATH));
app.use('/api/homes/:id', express.static(PATH));


app.get('/api/homes/:id/listing', (req, res) => {
  let query = req.params;
  console.log(query);
  Listings.find(query, (err, listing) => {
    if (err) { console.error(err); }
    res.send(listing);
  });
});


app.put('/api/homes/:id/listing', (req, res) => {
  let query = req.params;
  let update = req.body;
  Listings.save(query, update, (err, listing)=> {
    if (err) { console.error(err); }
    res.send(listing);
  });
});

// Tony said not to worry about user input for now

// app.get('/api/homes/:id/user/', (req, res) => {
//   let query = req.query;
//   Users.find(query, (err, user) => {
//     if(err) console.error(err);
//     console.log(user);
//     res.send(user);
//   });
// });

// app.put('/api/homes/:id/user', (req, res) => {
//   let query = req.params;
//   let listing = req.body.listingId;
//   let isSaved = req.body.saved;

//   if (isSaved) {
//     Users.delete(query, listing);
//     res.send(false);
//   } else {
//     Users.save(query, listing);
//     res.send(true);
//   }
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`, PATH);
});

