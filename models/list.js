import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
  },
});

const List = mongoose.model("List", listSchema);

export default List;
