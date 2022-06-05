const express = require('express')
const router = express.Router()
const Users = require('../../models/users')

/* GET users listing. */
router.post('/', async (req, res, next) => {
  const { email, password } = req.body
  const user = await Users.findOne({ email })
  // console.log('router.post ~ user', user)
  // console.log('router.post ~ user.password', user.password)
  if (user === null || password !== user.password) {
    const msg = 'wrong email or password'
    res.redirect('/?msg=' + msg)
  } else {
    res.render('welcome', { firstName: user.firstName })
  }
})
module.exports = router
