const express = require('express')
const router = express.Router()
const indexRouter = require('./modules/index')
const usersRouter = require('./modules/users')

router.use('/', indexRouter)
router.use('/users', usersRouter)

module.exports = router
