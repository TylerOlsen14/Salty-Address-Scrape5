const express = require('express');
const router = express.Router();
const monggose = require('mongoose')

// Address model - Help make queries
const address = require('../../models/address')

router.get('/', async (req, res) => { //represents api/items (because we're already in that file)
  await address.find()
    .then(address => res.json(address))
})

router.get('/:id', async(req, res) => {
  await address
    .findById(req.params.id)
    .then(address => res.json(address))
})

router.post('/', (req, res) => {
  const newAddress = new address({
    name: req.body.name, // comes from a request
    url: req.body.url, 
    address: req.body.address
  });
  newAddress.save().then(address => res.json(address)); //save to the database, spit out JSON
})

router.put('/:id', (req, res) => {
  address.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, address) => {
      // Handle any possible database errors
      if (err) return res.status(500).send(err);
      return res.send(address);
    }
  ) 
});

router.delete('/:id', (req, res) => { //represents api/items (because we're already in that file)
  address
    .findById(req.params.id)
    .then(address => address.remove()
    .then(() => res.json({sucess: true})))
    .catch (err => res.status(404).json({success: false}))
})

module.exports = router