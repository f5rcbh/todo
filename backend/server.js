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

// for filter data

app.get("/f5rcbh/complete", (req, res) => {
  console.log(req.query);
  Todo.find({ isCompleted: req.query.isCompleted }, (err, data) => {
    if (err) {
      console.log("get error", err);
    } else {
      res.json(data);
    }
    console.log("get done");
  });
});

app.post("/f5rcbh", (req, res) => {
  Todo.create(req.body, (err, data) => {
    if (err) {
      console.log("psot error", err);
    } else {
      res.json(data);
      console.log("post done");
    }
  });
});

app.delete("/f5rcbh/:id", (req, res) => {
  Todo.deleteOne({ _id: req.params.id }, (err, deleteData) => {
    if (err) {
      console.log("delete error ", err);
    } else {
      if (deleteData.deletedCount === 1) {
        res.json("delete one elm");
        console.log("delete one elm");
      } else {
        res.status(404).json("delete NOT FOUND");
      }
    }
  });
});

app.delete("/f5rcbh", (req, res) => {
  Todo.deleteMany({ isCompleted: true }, (err, deleteData) => {
    if (err) {
      console.log("delete error ", err);
    } else {
      if (deleteData.deletedCount === 0) {
        res.status(404).json("delete NOT FOUND");
      } else {
        res.json("delete all elm");
        console.log("delete all elm", deleteData);
      }
    }
  });
});

app.put("/f5rcbh/:id", (req, res) => {
  Todo.updateOne(
    { _id: req.params.id },
    { title: req.body.newTitle },
    (err, updateData) => {
      if (err) {
        console.log("update Error", err);
        res.status(404).json(err);
      } else {
        if (updateData.modifiedCount === 1) {
          res.json("update one elm");
          console.log("update one elm");
        } else {
          console.log(err);
          res.status(404).json("update NOT FOUND");
        }
      }
    }
  );
});

app.put("/f5rcbh/:id/:isCompleted", (req, res) => {
  console.log(req.params);
  Todo.updateOne(
    { _id: req.params.id },
    { isCompleted: req.params.isCompleted },
    (err, updateData) => {
      if (err) {
        console.log("update Error", err);
        res.status(404).json(err);
      } else {
        if (updateData.modifiedCount === 0) {
          console.log(err);
          res.status(404).json("update NOT FOUND");
        } else {
          res.json("update all elm");
          console.log("update all elm", updateData);
        }
      }
    }
  );
});
