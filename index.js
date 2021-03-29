import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import taskRoutes from "./routes/tasks.js";
import listRoutes from "./routes/lists.js";
import tagRoutes from "./routes/tags.js";
import subTaskRoutes from "./routes/subTasks.js";
const app = express();

dotenv.config();
app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

// Routes
app.use("/tasks", taskRoutes);
app.use("/lists", listRoutes);
app.use("/tags", tagRoutes);
app.use("/subtasks", subTaskRoutes);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) =>
    console.log("Error has occured while connection: " + error.message)
  );

mongoose.set("useFindAndModify", false);
