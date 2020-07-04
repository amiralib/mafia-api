const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
  code: String,
  roles: [String],
  players: [String]
});

module.exports = mongoose.model('Rooms', RoomSchema);