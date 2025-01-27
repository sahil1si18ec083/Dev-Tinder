const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const userModal = new mongoose.model("User", userSchema);

module.exports = userModal;
