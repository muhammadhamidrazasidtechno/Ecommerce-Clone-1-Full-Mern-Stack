import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
dotenv.config();

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log("MongoDB connected");
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
