const express = require("express"); //引入express
const router = express.Router(); // 使用express Router
const connectToDatabase = require("../../config/db");

router.get("/list", async (req, res) => {
  try {
    const { db, client } = await connectToDatabase();
    const collection = db.collection("excerpts");
    const documents = await collection
      .find({
        content: { $ne: null },
        bookName: { $ne: null },
      })
      .toArray();
    client.close();
    res.status(200).json({ data: documents });
  } catch (error) {
    console.error("failed:", error);
    res.status(500).json({ error: error.message });
  }
});

router.use(express.json());
router.post("/upload", async (req, res) => {
  const { bookName, content } = req.body;
  console.log(req.body);
  if (!bookName || !content) {
    res.status(401).json({ error: "please complete the required info" });
    return;
  }

  try {
    // 连接到数据库并获取集合
    const { db, client } = await connectToDatabase();
    const excerptsCollection = db.collection("excerpts");

    // 在 "excerpts" 集合中插入新的文档
    const result = await excerptsCollection.insertOne({ bookName, content });
    console.log("success:", result.insertedId);
    client.close();
    res.status(200).json({ message: "success", insertedId: result.insertedId });
  } catch (error) {
    console.error("failed:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; // 导出路由模块
