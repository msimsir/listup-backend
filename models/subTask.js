import mongoose from "mongoose";

const subTaskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  status: { type: Boolean, default: false },
});

const SubTask = mongoose.model("SubTask", subTaskSchema);

export default SubTask;
