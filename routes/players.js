const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const player = new Player({
    name: req.body.name,
    role: req.body.role,
    alive: req.body.alive
  });

  try {
    const savedPlayer = await player.save();
    res.json(savedPlayer);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:playerId', async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId);
    res.json(player);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:playerId', async (req, res) => {
  try {
    const removedPlayer = await Player.deleteOne({ _id: req.params.playerId });
    res.json(removedPlayer);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:playerId', async (req, res) => {
  try {
    const updatedPlayer = await Player.updateOne(
      { _id: req.params.playerId },
      {
        $set: {
          name: req.body.name,
          role: req.body.role,
          alive: req.body.alive
        }
      }
    );
    res.json(updatedPlayer);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;