var express = require('express');
var router = express.Router();
let mysql = require('../public/javascripts/sql');
let multer = require('multer');

// destination定义文件 / filename 定义文件名
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
let upload = multer({storage: storage});

// upload.single('file') 接收单个文件
// upload.array('files', 9)
router.post('/upload', upload.array('files', 9), (req, res, next) => {

  let contentTypeArr = null;
  let contentType = null;
  if (req.headers['content-type']) contentTypeArr = req.headers['content-type'].split(';');
  if (contentTypeArr.length > 0) contentType = contentTypeArr[0];

  console.log(req);
  handleSQL(res, req.body);
  
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

  mysql.query(querySql, (error, result) => {
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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
