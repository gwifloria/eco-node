const { MongoClient } = require("mongodb");
const { connect } =require("./connect");

async function run() {
  try {
    await connect();
    // Use the collection "people"
    const col = db.createCollection("todos");
  } catch (err) {
    console.log(err.stack,'111');
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
