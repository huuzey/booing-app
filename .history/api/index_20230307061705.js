const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User.js");

const app = express();
app.use(express.json());
const bcryptsalt = bcrypt.genSaltSync(10);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5175",
  })
);
mongoose.connect(process.env.MONGO_URL);

app.get("/text", (req, res) => {
  res.json("ok");
});
app.listen(4000);
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptsalt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});
