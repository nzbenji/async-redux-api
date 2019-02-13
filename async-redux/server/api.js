const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('loremricksum.com/api', (req, res) => {
  request
    .get(`loremricksum.com/api/`)
    .end((err, result) => {
      if(err) {
        res.status(500).send(err.message)
      } else {
        console.log(result)
      }
    })
})

module.exports = router