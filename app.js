import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./data/config.env",
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
