import express from "express";
import db from "./database/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./routes/index.js";
let PORT = process.env.PORT || 6464;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);
// app.use("/", db)

Routes.post("/create", () => {});
app.listen(PORT, () => {
  console.log("app connected successfully");
});
