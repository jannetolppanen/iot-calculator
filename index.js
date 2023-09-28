const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// total number of visitors until last reset
let totalVisitors = 0;

// total number of visitors inside area currently
let currentVisitors = 0;

// credentials
const auth_username = 'iotcalc';
const auth_password = 'secret';

app.use(express.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.status(200).json({ currentVisitors, totalVisitors });
});

app.post('/update', (req, res) => {
  const { username, password, currentCount, totalCount } = req.body;

  if (auth_username !== username || auth_password !== password) {
    return res.status(401).json({ error: 'invalid credentials' });
  }

  if (currentCount === undefined || totalCount === undefined) {
    return res.status(400).json({ error: 'data missing' });
  }

  if (
    currentCount === null ||
    totalCount === null ||
    isNaN(currentCount) ||
    isNaN(totalCount)
  ) {
    return res.status(400).json({ error: 'invalid data' });
  }

  currentVisitors = currentCount;
  totalVisitors = totalCount;
  res.status(200).json({ currentVisitors, totalVisitors });
});

app.post('/reset', (req, res) => {
  const { username, password } = req.body;
  if (auth_username !== username || auth_password !== password) {
    return res.status(401).json({ error: 'invalid credentials' });
  }
  totalVisitors = 0;
  currentVisitors = 0;
  res.status(200).json({ currentVisitors, totalVisitors });
});

app.listen(port, 'localhost', () => {
  console.log(`listening at localhost:${port}`);
});
