const express = require('express')
const router = express.Router()
const Users = require('../../models/users')

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const cookie = req.cookies
    const user = await Users.findOne({ email: cookie.email })
    if (user) {
      // res.render('welcome', { firstName: user.firstName })
      res.redirect('/users')
    } else {
      const query = req.query.msg
      res.render('index', { query })
    }
  } catch {
    next()
  }
})

module.exports = router
