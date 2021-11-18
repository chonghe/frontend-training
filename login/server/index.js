const express = require("express");
const app = express();
//引入router
const router = require("./router");
//引入cros
const cors = require("cors");
//nodemon debug
const debug = require("debug")("my-application");

//跨域配置
app.use(cors());

//post接收参数 需引入bodyparser
const bodyparser = require("body-parser");
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use("/api", router);

app.listen(3300, () => {
  //console.log("3300 lisening...");
  debug();
});
