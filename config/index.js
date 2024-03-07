// @config/keys.js
const password = encodeURIComponent("<LittleBJ0101>");
// const onlineURL = `mongodb+srv://ghuijue:${password}@cluster0.quptfef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const local = "mongodb://127.0.0.1:27017";

module.exports = {
  mongoURI: local,
};
