var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/apis/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// // DB Config 连接数据库
// const db = require("./config/index").mongoURI;// 创建配置项目录config, 存放静态常量
// mongoose.connect(db).then(res=>{
//   console.log(`MongoDB connected!`)
// }).catch(err=>{
//   console.log(`MongoDB connected Failed: \n ${err}`)
// }).finally(()=>{
//   console.log(1);
// })

// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'LittleBJ0101;',
//   database: 'my_db'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

module.exports = app;
