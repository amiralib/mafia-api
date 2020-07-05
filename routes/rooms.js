const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const room = new Room({
    code: req.body.code,
    mafia_count: req.body.mafia_count,
    villager_count: req.body.villager_count,
    roles: req.body.roles,
    players: req.body.players
  });

  try {
    const savedRoom = await room.save();
    res.json(savedRoom);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;