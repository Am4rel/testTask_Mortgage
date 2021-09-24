const express = require('express');
const cors = require('cors');

const {banksRouter} = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/banks', banksRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Error: Not found' });
});

app.use((err, _, res, __) => {
  const {status = 500} = err;
  const {message = "Server error"} = err;
  res.status(status).json({ message });
});

module.exports = app;