const express = require("express");
const app = express();
const port = 6060;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`eco listening on port ${port}`);
});

