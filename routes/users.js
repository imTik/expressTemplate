var express = require('express');
var router = express.Router();
let mysql = require('../public/javascripts/mysqlPackage');

/* GET users listing. */
router.post('/registered', function(req, res, next) {
  console.log('--', req);
  res.send('respond with a resource');
});

module.exports = router;
