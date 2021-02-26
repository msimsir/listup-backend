import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  routineType: {
    type: String,
    enum: ["daily", "every two days", "weekly", "monthly"],
    required: true,
    default: "daily",
  },
  createdDate: { type: Date, default: formatDate(new Date()) },
  startDate: { type: Date, default: createdDate },
  endDate: { type: Date },
  list: { type: mongoose.Schema.Types.ObjectId, ref: "List", required: false },
});

const Routine = mongoose.model("Routine", routineSchema);

export default Routine;
