const express = require("express");
const CORS = require("cors");
const db = require("./db");
const Todo = require("./todo");
const app = express();
const User = require("./user");

// check model
console.log(Todo);
console.log(User);

app.use(CORS());

app.use(express.json());

// TO-DO-LIST

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
  Todo.deleteMany({}, (err, deleteData) => {
    if (err) {
      console.log("delete error ", err);
    } else {
      if (deleteData.deletedCount === 0) {
        res.status(404).json("delete NOT FOUND");
        console.log("delete not found");
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

// Users

app.post("/user/Register", (req, res) => {
  User.create(req.body, (err, userData) => {
    if (err) {
      console.log("Error user ", err);
      res.status(400).json("Error user ", err);
    } else {
      console.log("create new user", userData);
      res.status(200).json("create new user");
    }
  });
});

app.delete("/user/del", (req, res) => {
  User.deleteMany({}, (err, deleteUser) => {
    if (err) {
      console.log("delete error ", err);
    } else {
      if (deleteUser.deletedCount === 0) {
        res.status(404).json("delete NOT FOUND");
      } else {
        res.json("delete all elm");
        console.log("delete all elm", deleteUser);
      }
    }
  });
});

// Login

app.post("/user/login", (req, res) => {
  User.find({ email: req.body.email }, (err, loginData) => {
    if (err) {
      console.log("Login Error", err);
      res.status(404).json("Login Error", err);
    } else {
      if (loginData.length === 1) {
        if (req.body.password === loginData[0].password) {
          console.log("welcome");
          res.status(200).json(`welcome ${loginData[0].userName}`);
        } else {
          console.log("wrong password");
          res.status(200).json("wrong password");
        }
      } else {
        console.log("user not register");
        res.status(200).json("user not register");
      }
    }
  });
});

app.listen(5000, () => {
  console.log("server is working");
});
