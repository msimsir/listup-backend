import mongoose from "mongoose";

const subTaskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  taskRef: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
  status: { type: Boolean, default: false },
});

const SubTask = mongoose.model("SubTask", subTaskSchema);

export default SubTask;
