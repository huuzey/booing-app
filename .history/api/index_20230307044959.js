const express = require("express");

const app = express();

app.get("/text", (req, res) => {
  res.json("ok");
});
app.listen(4000);
