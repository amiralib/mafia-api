const express = require('express');
const router = express.Router();
const Room = require('../models/Player');

router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;