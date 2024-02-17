const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("./routes/index");

mongoose
  .connect("mongodb://localhost:27017/crudb")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.error("Error connecting to database:", error));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
