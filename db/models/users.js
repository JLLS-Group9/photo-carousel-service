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
  id: Number,
  savedList: [Number],
});

const UserModel = mongoose.model('User', userSchema);

UserModel.createCollection();

// eslint-disable-next-line func-style
function insertOne(user, callback) {
  UserModel.create(user, callback);
}

// function findOne(id, callback) {
//   UserModel.findOne(id, callback);
// };

// function saveListing(userId, listingId, callback) {
//   findOne(userId, (err, user) => {
//     if (err) console.error(err);
//     user.savedList.push(listingId);
//     user.save();
//   })
// }

// function deleteListing(userId, listingId, callback) {
//   findOne(userId, (err, user) => {
//     if (err) console.error(err);
//     user.savedList.pull(listingId);
//     user.save();
//   })
// }



module.exports.insertUser = insertOne;
// module.exports.find = findOne;
// module.exports.save = saveListing;
// module.exports.delete = deleteListing;
