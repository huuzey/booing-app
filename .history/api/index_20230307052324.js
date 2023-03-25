const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5175",
  })
);
app.get("/text", (req, res) => {
  res.json("ok");
});
app.listen(4000);
