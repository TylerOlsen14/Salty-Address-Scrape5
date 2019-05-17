const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const addressSchema = new Schema({
  name: {
    type: string
  },
  address: {
    type: string
  },
  url: {
    type: string
  }
})

module.exports = address = mongoose.model('Address', addressSchema);