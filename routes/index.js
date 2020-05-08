var express = require('express');
var router = express.Router();

let MYSQL = require('../public/javascripts/mysqlPackage');
let MULTER = require('../public/javascripts/multerPackage');
let upload = new MULTER('upload/');

let _sql = new MYSQL({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  prot: '3306',
  database: 'hw',       // 数据库
});

/**
 * 上传文件模板
 * upload.single('file') 接收单个文件
 * upload.array('files', 9) 接收多个文件
 */
router.post('/upload', upload.single('file'),  (req, res, next) => {

  // 截取Content-TypeC
  let contentTypeArr = null;
  let contentType = null;
  if (req.headers['content-type']) contentTypeArr = req.headers['content-type'].split(';');
  if (contentTypeArr.length > 0) contentType = contentTypeArr[0];
  console.log(contentType); 

  res.send('success');
  // handleSQL(res, req.body);
  
});

function handleSQL (res, BODY) {

  let { account, password, nickName, email, phone } = BODY;

  let resData = {
    code: 0,
    msg: 'success',
  };

  if (!account || !password || !nickName || !email || !phone) {
    resData.code = -1;
    resData.msg = '缺少字段';
    res.send(resData);
    return;
  };

  let querySql = `INSERT INTO user (account, password, nickName, email, phone) VALUES ("${account}", "${password}", "${nickName}", "${email}", "${phone}");`;

  _sql.query(querySql, (error, result) => {
    if (error) {
      console.log(error);
      resData.code = -2;
      resData.msg = 'SQL错误';
      res.send(resData);
    } else {
      res.send(resData);
      // console.log(result);
    };
  });
};

module.exports = router;
