const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "lastName",
    "firstName",
    "password",
    "email",
    "userName",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid inputs" });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    user ? res.send(user) : res.status(404).send("user dosn't exist !!");
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
