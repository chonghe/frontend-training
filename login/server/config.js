const mysql = require("mysql");
const client = mysql.createConnection({
  host: "168.138.40.98",
  user: "root",
  password: "",
  database: "jstraining",
});

/**
 * query执行数据库语句的方法
 *      sql：数据库语句
 *      arr：数据库语句的参数
 *      callback：相应结果的回调函数
 */ module.exports = function sqlFn(sql, arr, callback) {
  client.query(sql, arr, (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    callback(result);
  });
};
