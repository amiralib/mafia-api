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

router.delete('/:roomId', async (req, res) => {
  try {
    const removedRoom = await Room.deleteOne({ _id: req.params.roomId });
    res.json(removedRoom);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:roomId', async (req, res) => {
  try {
    const updatedRoom = await Room.update({
      _id: req.params.roomId,
      $addToSet: {
        players: req.body.player
      }
    });
    res.json(updatedRoom);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:roomId', async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    res.json(room);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/', async (req, res) => {
  try {
    const deleted = await Room.deleteMany({});
    res.json(deleted);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;