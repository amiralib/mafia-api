const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  mafia_count: {
    type: Number,
    required: true
  },
  villager_count: {
    type: Number,
    required: true
  },
  roles: {
    type: [String],
    required: true
  },
  players: [{
    name: {
      type: String,
      required: true
    },
    role: {
      type: String
    },
    selections: {
      type: [String],
      default: []
    }
  }]
});

module.exports = mongoose.model('Rooms', RoomSchema);