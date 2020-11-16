const mongoose = require('mongoose');

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('connected!');
});

const listingSchema = mongoose.Schema({
  id: Number,
  topHeaders: {
    forSale: Boolean,
    forRent: Boolean,
    underConstruction: Boolean,
    pending: Boolean,
    isNew: Boolean,
  },
  address: String,
  price: Number,
  bedroom: Number,
  bathroom: Number,
  saved: Boolean,
  photos: [String],
});

const ListingModel = mongoose.model('Listing', listingSchema);

// eslint-disable-next-line func-style
function insertOne(listing, callback) {
  ListingModel.create(listing, callback);
}

// eslint-disable-next-line func-style
function findOne(id, callback) {
  ListingModel.findOne(id, callback);
}

// eslint-disable-next-line func-style
function save(id, update, callback) {
  ListingModel.findOneAndUpdate(id, update, { new: true}, callback);
}

// ListingModel.createCollection();
module.exports.save = save;
module.exports.insertListing = insertOne;
module.exports.find = findOne;