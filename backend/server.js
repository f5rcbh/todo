const express = require("express");

const db = require("./db");

const app = express();

const todo = require("./todo");

console.log(todo);

app.use(express.json());

app.listen(3000, () => {
  console.log("server is working");
});

app.get("/f5rcbh", (req, res) => {
  res.json("get is done");
  console.log("get done");
});

app.post("/post", (req, res) => {
  req.body;
  res.json("post is done");
  console.log("post is done");
});
