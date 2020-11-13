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

app.get('/api/listing', (req, res) => {
  var query = req.query;
  Listings.find(query, (err, listing) => {
    if(err) console.error(err)
    console.log(listing)
    res.send(listing)
  })
})

app.get('/api/user', (req, res) => {
  var query = req.query;
  Users.find(query, (err, user) => {
    if(err) console.error(err)
    console.log(user)
    res.send(user)
  })
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

