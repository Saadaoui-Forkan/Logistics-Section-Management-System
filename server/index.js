import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import morgan from "morgan";
import cors from "cors";
import db from "./database/db.js";

dotenv.config();
const port = process.env.PORT || 5001;

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use("/", router);

db.sync().then(() => {
  app.listen(port, () => {
    console.log("express is running on port " + port);
  });
});
