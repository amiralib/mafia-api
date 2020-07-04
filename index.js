const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const playersRoute = require('./routes/players');
const roomsRoute = require('./routes/rooms');

app.use('/players', playersRoute);
app.use('/rooms', roomsRoute);

app.get('/', (req, res) => {
  res.send('We are on home');
});

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('>> connected to database')
);

app.listen(PORT);