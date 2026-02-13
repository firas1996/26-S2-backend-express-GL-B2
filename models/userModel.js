const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required !!!"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "The email is required !!!"],
    validate: [validator.isEmail, "This email is not valid !!!"],
    unique: true,
    lowercase: true,
    // uppercase: true,
  },
  password: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
    // validate:validator.isStrongPassword
  },
  confirm_password: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
    validate: {
      validator: (confirmPass) => {
        return confirmPass === this.password;
      },
      message: "Pass and cPass does not match !!!",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
