import mongoose from "mongoose";
import formatDate from "../utils/formatDate.js";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  createdDate: { type: Date, default: formatDate(new Date()) },
  timeTag: { type: String, required: true },
  status: {
    type: Boolean,
    default: false,
  },
  subtasks: [],
  list: { type: mongoose.Schema.Types.ObjectId, ref: "List" },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  endDate: { type: Date },
  trashStatus: { type: Boolean, default: false },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
