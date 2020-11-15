const express = require("express");
require("./db/mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server running ...");
});
