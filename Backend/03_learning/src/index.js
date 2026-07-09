import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
};

startServer();