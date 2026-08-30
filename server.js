import "dotenv/config";
import express from "express";
import contactHandler from "./api/contact.js";

const app = express();

app.use(express.json());

app.post("/api/contact", (req, res) => {
  contactHandler(req, res);
});

app.options("/api/contact", (req, res) => {
  contactHandler(req, res);
});

app.listen(3001, () => {
  console.log("API running on http://localhost:3001");
});