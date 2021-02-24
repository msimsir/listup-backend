import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("THIS WORKS");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
