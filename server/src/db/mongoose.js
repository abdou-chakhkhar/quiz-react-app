const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/quiz", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
