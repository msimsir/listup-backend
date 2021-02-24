import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  priorityLevel: {
    type: Number,
    default: 1,
  },
});

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
