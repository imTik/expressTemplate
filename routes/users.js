var express = require('express');
var router = express.Router();
let mysql = require('../public/javascripts/sql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
