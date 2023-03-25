const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User.js");
require("dotenv").config();

const app = express();
app.use(express.json());
const bcryptSalt = bcrypt.genSaltSync(10);
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
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
      } else {
      }
    } else {
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(4000);
