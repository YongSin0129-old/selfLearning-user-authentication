const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const query = req.query.msg
  res.render('index', { query })
})

module.exports = router
