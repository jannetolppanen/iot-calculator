require('dotenv').config();
const mongoose = require('mongoose')

const url = process.env.MONGO_URI

console.log('connecting to mongo...')
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  const calculatorSchema = new mongoose.Schema({
    currentVisitors: Number,
    totalVisitors: Number,
  });

  module.exports = mongoose.model('Calculator', calculatorSchema)