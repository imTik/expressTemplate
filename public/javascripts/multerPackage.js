let multer = require('multer');

// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

function mylter_storage (path) {
  multer({ dest: path }); // 先创建文件夹
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  return multer({storage: storage});
}

module.exports = mylter_storage;