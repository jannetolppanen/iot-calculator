const express = require('express');
const app = express();
const port = 3000;
let count = 0;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.type('application/json')
  res.status(200)
  res.send(JSON.stringify({ "Current count": count }))
})

app.post('/add', (req, res) => {
  count = count + 1;
  res.type('application/json')
  res.status(200)
  res.send(JSON.stringify({ "Current count": count }))
})

app.post('/reset', (req, res) => {
  count = 0
  res.type('application/json')
  res.status(200)
  res.send(JSON.stringify({ "Current count": count }))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`listening at http://0.0.0.0:${port}`)
});