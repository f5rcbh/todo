const express = require("express");

const db = require("./db");
const Todo = require("./todo");

const app = express();

const todo = require("./todo");

console.log(todo);

app.use(express.json());

app.listen(3000, () => {
  console.log("server is working");
});

app.get("/f5rcbh", (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      console.log("get error", err);
    } else {
      res.json(data);
    }
    console.log("get done");
  });
});

app.post("/post", (req, res) => {
  Todo.create(req.body, (err, data) => {
    if (err) {
      console.log("psot error", err);
    } else {
      res.json(data);
      console.log("post done", data);
    }
  });
});
