const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});