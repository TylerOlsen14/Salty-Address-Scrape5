const express = require('express');
const router = express.router();

const address = require('../../models/address')

router.get('/', async (req, res) => {
  await address.find()
    .then(address => res.json(address))
})

router.get('/:id', async (req, res) => {
  await address
    .findById(req.params.url)
    .then(address => res.json(address))
})

router.put('/:id', (req, res) => {
  address.findByIdAndUpdate(
    req.params.url,
    req.body,
    {new: true},
    (err, address) => {
      if (err) return res.status(500).send(err);
      return res.send(address);
    }
  )
});

module.exports = router