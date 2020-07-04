const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  alive: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Players', PlayerSchema);