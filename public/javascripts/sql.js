const mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  prot: '3306',
  database: 'test',       // 数据库
});

connection.connect();

// let querySql = 'SELECT * FROM TEST;'
// connection.query(querySql, (error, result) => {
//   if (error) console.log(error);
//   console.log('the sql data:', result);
// });

// let delSql = 'DELETE FROM TEST WHERE id>1 AND id<5';
// connection.query(delSql, (error, result) => {
//   if (error) console.log(error);
//   console.log('del----------', result.message);
// });

// let updataSql = 'UPDATE test SET name="关加豪" WHERE id=5'; 
// connection.query(updataSql, (error, result) => {
//   if (error) console.log(error);
//   console.log('updata--------------', result.message);
// });

// let insertSql = 'INSERT INTO test (id, name) VALUES (8, "吴健荣")';
// connection.query(insertSql, (error, result) => {
//   if (error) console.log(error);
//   console.log('inset--------------', result.message);
// });

// connection.query(querySql, (error, result) => {
//   if (error) console.log(error);
//   console.log('the sql data:', result);
// });

// connection.end();

module.exports = connection;
