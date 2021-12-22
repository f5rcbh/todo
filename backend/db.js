const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/f5rcbh";

const db = mongoose.connection;

mongoose.connect(mongoURL);

db.on("error", (err) => {
  console.log("error", err);
});

db.on("connected", (connect) => {
  console.log("mongodb is working");
});
