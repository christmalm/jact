const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postPlayerDecs = require('./routes/player');
const getPlayer = require('./routes/playerList');

const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log('Db connected')
);

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use('/playerData', postPlayerDecs);
app.use('/playerList', getPlayer);

app.listen(4000, console.log('server  is running on port 4000'));

//https://www.youtube.com/watch?v=SQqSMDIzhaE
// login
// tid 1:04:20
//decrypt password
// and i can push to repo
