const mongoose = require('mongoose');
const faker = require('faker');
const Listings = require('./db/models/listings.js');
const housesUrls = require('./photosData').housesPhotos;
const Users = require('./db/models/users.js');

mongoose.connect('mongodb://localhost/photocarousel', { useNewUrlParser: true, useUnifiedTopology: true });

const makeListing = function (id) {
  return {
    id: id + 1,
    topHeaders: {
      forSale: (Math.random() < 0.5),
      forRent: (Math.random() < 0.5),
      underConstruction: (Math.random() < 0.5),
      pending: (Math.random() < 0.5),
      isNew: (Math.random() < 0.5),
    },
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCodeByState()}`,
    price: Math.floor(Math.random() * 1000) * 1000,
    saved: false,
    bedroom: Math.ceil(Math.random() * 10),
    bathroom: Math.ceil(Math.random() * 4),
    photos: housesUrls[Math.floor(Math.random() * 5)],
  };
};

const populateSavedList = function (number) {
  const savedListings = [];
  for (let i = 1; i < number; i += 1) {
    if (Math.random() < 0.1) {
      savedListings.push(i);
    }
  }
  return savedListings;
};

const makeUser = function (id, number) {
  return {
    id: id + 1,
    savedList: populateSavedList(number),
  };
};

const seedListings = function (number) {
  for (let i = 0; i < number; i += 1) {
    Listings.insertListing(makeListing(i));
    Users.insertUser(makeUser(i, number));
  }
};

seedListings(100);
