var express = require('express');
var router = express.Router();
var config = require('../config');
var sql = config.getSQLConnection();

router.get('/', (req, res) => {
  console.log(req.query.id);
  sql.query("SELECT * FROM sys.users WHERE id='" + req.query.id + "';", (error, results, fields) => {
    if(error) throw error;
    res.send(results);
  })
});

router.post('/', (req, res) => {
  res.send("POST USER");
});

module.exports = router;
