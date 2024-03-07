// // DB Config 连接数据库
// const mongoose = require("mongoose");

// const db = require("./index").mongoURI; // 创建配置项目录config, 存放静态常量

// mongoose
//   .connect(db)
//   .then((res) => {
//     console.log(res);
//     console.log(`MongoDB connected!`);
//   })
//   .catch((err) => {
//     console.log(`MongoDB connected Failed: \n ${err}`);
//   })
//   .finally(() => {
//     console.log(`MongoDB complete!`);
//   });

// module.exports = db;

const { MongoClient } = require("mongodb");

// MongoDB 连接 URI
const uri = require("./index").mongoURI;
// MongoDB 数据库名称
const dbName = "mydb";

// 连接 MongoDB 数据库的函数
async function connectToDatabase() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // 连接数据库
    await client.connect();
    console.log("成功连接到 MongoDB 数据库");

    // 选择要使用的数据库
    const db = client.db(dbName);

    return { client, db };
  } catch (error) {
    console.error("MongoDB 连接失败:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
