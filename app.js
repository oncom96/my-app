const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Menghubungkan ke MongoDB menggunakan nilai MONGO_URI dari environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello, World! Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

