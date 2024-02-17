import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/crudb")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.error("Error connecting to database:", error));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
