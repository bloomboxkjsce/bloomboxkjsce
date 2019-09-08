const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const validator = require("validator");
const cors = require("cors");

const app = express();
app.use(express.static(path.join(__dirname, "./Public/css")));
app.use(express.static(path.join(__dirname, "./Public/js")));
app.use(cors());

app.get("/index", async (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/index.html"));
});

app.post("/index", async (req, res) => {
  try {
    res.json({
      msg: "port connected on post to mongo db"
    });
  } catch (e) {
    res.json({ e });
  }
});

app.get("/contact", async (req, res) => {
  res.json({
    msg: "port connected"
  });
});
app.get("/campus-company", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "./Public/campus-company.html"));
  } catch (e) {
    res.status(403).json({ e });
  }
});
app.get("/events", async (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/events.html"));
});
app.get("/partners", async (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/partners.html"));
});
app.get("/team", async (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/team.html"));
});

app.listen(80, () => {
  console.log("server started");
});
