var express = require('express');
var router = express.Router();
let MYSQL = require('../public/javascripts/mysqlPackage');

let _sql = new MYSQL({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  prot: '3306',
  database: 'hw',       // 数据库
});

/* GET users listing. */
router.post('/registered', function(req, res, next) {
  console.log('--', req);
  res.send('respond with a resource');
});

module.exports = router;
