const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AddressSchema = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  },
  ClientNotes: {
    type: String
  }
})

module.exports = address = mongoose.model('ReactApp', AddressSchema);