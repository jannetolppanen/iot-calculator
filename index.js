require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

// total number of visitors until last reset
let totalVisitors = 0;

// total number of visitors inside building currently
let currentVisitors = 0

// credentials from .env
const auth_username = process.env.AUTH_USERNAME
const auth_password = process.env.AUTH_PASSWORD

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).json({ currentVisitors, totalVisitors })
})

app.post('/increment', (req, res) => {
  const { username, password } = req.body
  if (auth_username !== username || auth_password !== password) {
    return res.status(401).json({ "error" : "invalid credentials" })
  }
  currentVisitors = currentVisitors + 1;
  totalVisitors = totalVisitors + 1
  res.status(200).json({ currentVisitors, totalVisitors })
})

app.post('/decrement', (req, res) => {
  const { username, password } = req.body
  if (auth_username !== username || auth_password !== password) {
    return res.status(401).json({ "error" : "invalid credentials" })
  }
  if (currentVisitors <= 0) {
    return res.status(400).json({
      error: 'Cant decrement any more visitors'
    })
  }
  currentVisitors = currentVisitors - 1;
  res.status(200).json({ currentVisitors, totalVisitors })
})

app.post('/reset', (req, res) => {
  const { username, password } = req.body
  if (auth_username !== username || auth_password !== password) {
    return res.status(401).json({ "error" : "invalid credentials" })
  }
  totalVisitors = 0
  currentVisitors = 0
  res.status(200).json({ currentVisitors, totalVisitors })
})

// for production enviroment
app.listen(port, '0.0.0.0', () => {
  console.log(`listening at http://0.0.0.0:${port}`)
});

// for dev enviroment
// app.listen(port, 'localhost', () => {
//   console.log(`listening at http://0.0.0.0:${port}`)
// });