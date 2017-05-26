var express = require('express')
var router = express.Router()
var config = require('../config')
var sql = config.getSQLConnection()
var parser = require('../libs/parser')

router.get('/', (req, res) => {
  sql.query("SELECT * FROM tswa.users WHERE id='" + req.query.id + "';", (error, users, fields) => {
    if(error) throw error
    res.json({users: users})
  })
})

router.post('/', (req, res) => {
  let values = parser.createValuesString(req.body)
  sql.query("INSERT INTO tswa.users (firstname, lastname, email, password) VALUES (" + values + ")",
  (error, users, fields) => {
    if(error) throw error
    res.json({msg: "The user has been inserted"})
  })
})

module.exports = router
