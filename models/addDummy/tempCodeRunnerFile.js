const mongoose = require('../../config/mongoose')
const dummyData = require('./usersDummyData.json')
const users = require('../users')

const db = mongoose.connection

db.on('error', err => console.error(err))
db.once('open', () => {
  console.log('model ok ')
})

consol.log(users)
