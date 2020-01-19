import express from "express";
import path from "path";
import cors from "cors";
import uuid from "uuid";

const app = express(),
  ROOT_DIR = __dirname,
  ROOT_FILE = path.join(ROOT_DIR, "index.html"),
  ABOUT_FILE = path.join(ROOT_DIR, "about.html"),
  CAMPUS_FILE = path.join(ROOT_DIR, "campus-company.html"),
  EVENTS_FILE = path.join(ROOT_DIR, "events.html"),
  TEAM_FILE = path.join(ROOT_DIR, "team.html"),
  PARTNERS_FILE = path.join(ROOT_DIR, "partners.html");

app.use(express.json());
app.use(express.static(ROOT_DIR));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  return res.sendFile(ROOT_FILE);
});

app.get("/about", (req, res) => {
  return res.sendFile(ABOUT_FILE);
});

app.get("/campus-company", (req, res) => {
  return res.sendFile(CAMPUS_FILE);
});

app.get("/events", (req, res) => {
  return res.sendFile(EVENTS_FILE);
});

app.get("/team", (req, res) => {
  return res.sendFile(TEAM_FILE);
});

app.get("/partners", (req, res) => {
  return res.sendFile(PARTNERS_FILE);
});

const port = process.env.PORT || 8000;

// installing webpack to minify using uglify the js bundles in root

app.listen(port, message => {
  console.log("server started on port 8000 || Production Port");
});
