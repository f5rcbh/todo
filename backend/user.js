const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  userName: String,
});

const user = model("user", userSchema);

module.exports = user;
