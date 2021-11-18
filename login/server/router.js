const express = require("express");
const router = express.Router();
//使用validator.js
const validator = require("validator");
const isEmpty = require("lodash/isEmpty");

const sqlFn = require("./config");
const url = require("url");

//data验证方法
/**
 * 如果发生错误，则返回错误信息，如果不发生错误，则返回true
 */
const validatorInput = (data) => {
  // validator.isEmpty 方法验证是否为空
  let errors = {};
  if (validator.isEmpty(data.username)) {
    errors.username = "username is not empty";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "email is not empty";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password is not empty";
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = "passwords are differents";
  }
  return {
    //如果value为空，那么返回true，否则返回false
    isValid: !isEmpty(errors),
    errors,
  };
  /**
   * isvalid: true
   * errors:{}
   *
   * isValid: false,
   * errors: {
   *    username:"用户名不能为空"
   * }
   */
};
router.post("/register", (req, res) => {
  //   const username = req.body.username;
  //   const email = req.body.email;
  //   const password = req.body.password;
  //   const passwordConfirmation = req.body.passwordConfirmation;
  const { isValid, errors } = validatorInput(req.body);

  if (isValid) {
    //f
    res.send(errors);
  } else {
    //success 将数据写入数据库
    const { username, email, password, passwordConfirmation } = req.body;
    const sql = "insert into customer values (null,?,?,?)";
    const arr = [username, email, password];
    sqlFn(sql, arr, (result) => {
      console.log(result);
      if (result.affectedRows > 0) {
        res.send({
          msg: "success",
        });
      } else {
        res.send({
          msg: "fails",
        });
      }
    });
  }
});

/**
 * 重复用户名
 */

router.get("/repeat/username", (req, res) => {
  const username = url.parse(req.url, true).query.username;
  const sql = "select * from customer where username=?";
  const arr = [username];
  sqlFn(sql, arr, (result) => {
    if (result.length > 0) {
      res.send({
        status: 200,
        msg: "username repeated",
        flag: false,
      });
    } else {
      res.send({
        status: 200,
        msg: "username ok",
        flag: true,
      });
    }
  });
});
module.exports = router;
