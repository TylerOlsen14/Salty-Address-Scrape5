const express = require('express');
const router = express.Router();

//Client Model - Help make queries
const address = require('../../models/address')

router.get('/', async (req, res) => { //represents api/items (because we're already in that file)
  await address.find()
    .then(addresses => res.json(addresses))
})
