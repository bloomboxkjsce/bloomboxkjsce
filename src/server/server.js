import express from "express";
import path from "path";
import cors from "cors";
import uuid from "uuid";

const app = express(),
  ROOT_DIR = __dirname,
  ROOT_FILE = path.join(ROOT_DIR, "index.html");

app.use(express.json());
app.use(express.static(ROOT_DIR));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  return res.sendFile(ROOT_FILE);
});

const port = process.env.PORT || 8000;

// installing webpack to minify using uglify the js bundles in root

app.listen(port, message => {
  console.log("server started on port 8000");
});
