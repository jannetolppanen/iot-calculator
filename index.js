const express = require('express');
const app = express();
const port = 3000;

// total number of visitors until last reset
let totalVisitors = 0;
// total number of visitors inside building currently
let currentVisitors = 0

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.type('application/json')
  res.status(200)
  res.send(JSON.stringify({ currentVisitors, totalVisitors }))
})

app.post('/increment', (req, res) => {
  currentVisitors = currentVisitors + 1;
  totalVisitors = totalVisitors + 1
  res.type('application/json')
  res.status(200)
  res.send(JSON.stringify({ currentVisitors, totalVisitors }))
})

app.post('/decrement', (req, res) => {
  currentVisitors = currentVisitors - 1;
  res.type('application/json')
  res.status(200)
  res.send(JSON.stringify({ currentVisitors, totalVisitors }))
})

app.post('/reset', (req, res) => {
  totalVisitors = 0
  currentVisitors = 0
  res.type('application/json')
  res.status(200)
  res.send(JSON.stringify({ currentVisitors, totalVisitors }))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`listening at http://0.0.0.0:${port}`)
});