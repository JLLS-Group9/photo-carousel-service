const mongoose = require('mongoose');

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('connected!');
});

const listingSchema = mongoose.Schema({
  listingId: Number,
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
  photos: [String],
});

const ListingModel = mongoose.model('Listing', listingSchema);

// eslint-disable-next-line func-style
function insertOne(listing, callback) {
  ListingModel.create(listing, callback);
}

ListingModel.createCollection();

module.exports.insertListing = insertOne;
