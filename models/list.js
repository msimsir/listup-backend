import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: false },
  ],
  routines: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Routine", required: false },
  ],
  owner: {
    type: String,
  },
});

const List = mongoose.model("List", listSchema);

export default List;
