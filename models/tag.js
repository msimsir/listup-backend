import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  priorityLevel: {
    type: String,
    default: "Low",
  },
});

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
