const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: { type: String, required: true, trim: true },
  userName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: { type: String, required: true, trim: true, minlength: 7 },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
