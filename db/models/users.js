const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photocarousel', { useNewUrlParser: true });

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('connected!');
});

const userSchema = mongoose.Schema({
  userId: Number,
  savedList: [Number],
});

const UserModel = mongoose.model('User', userSchema);

UserModel.createCollection();

function insertOne(user, callback) {
  UserModel.create(user, callback);
}

// function addSavedListing(personId, listingId) {
//   UserModel.update(
//     { _id: personId },
//     { $push: { savedList: listingId } },
//     done;
//   );
// }

// function DeleteSavedListing(personId, listingId) {
//     UserModel.update(
//         { _id: personId },
//         { $pullAll: {savedList: {listingId: listingId} } },
//         done
//     );
// }

module.exports.insertUser = insertOne;
