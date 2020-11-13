const mongoose = require('mongoose');

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('connected!');
});

const photoSchema = mongoose.Schema({
  listingId: Number,
  url: String,
});

const PhotoModel = mongoose.model('Photo', photoSchema);

PhotoModel.createCollection();
