var express = require('express');
var router = express.Router();

router.get('/:id', (req, res) => {
  res.send("GET USER BY ID");
});

router.post('/', (req, res) => {
  res.send("POST USER");
});

module.exports = router;
