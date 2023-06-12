const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Invalid email"],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [8, "Password must be at least 8 characters long"],
  },
  name: {
    type: String,
    required: true,
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [30, "Name can be up to 30 characters long"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
