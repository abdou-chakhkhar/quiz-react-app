const express = require("express");
const User = require("./models/user");
require("./db/mongoose");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  User.find({}).then((users) => {
    res.status(201).send(users);
  });
});

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(5000, () => {
  console.log("Server running ...");
});
