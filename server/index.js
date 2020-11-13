const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Listings = require('../db/models/listings.js');
const Users = require('../db/models/users.js');

// separate it later

mongoose.connect('mongodb://localhost/photocarousel');

const app = express();

const PORT = 8080;

app.use(bodyParser.json());
//app.use('/api/listing', listingRouter);

app.get('/api', (req, res) => {
  let query = req.query;
  console.log(query.userId, query.listingId)
  res.send(query)
})

app.get('/api/listing', (req, res) => {
  let query = req.query;
  Listings.find(query, (err, listing) => {
    if(err) console.error(err)
    console.log(listing)
    res.send(listing)
  })
})

app.get('/api/user', (req, res) => {
  let query = req.query;
  Users.find(query, (err, user) => {
    if(err) console.error(err)
    console.log(user)
    res.send(user)
  })
})

app.post('/api/user', (req, res) => {
  let query = req.query;
  let listing= req.body.listingId;
  let isSaved = req.body.saved;

  if(isSaved) {
    console.log(query, listing)
    Users.delete(query, listing)
    res.send(false)
  } else {
    console.log(query, listing)
    Users.save(query, listing)
    res.send(true)
  }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

