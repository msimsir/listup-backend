import mongoose from "mongoose";
import Tag from "../models/tag.js";

export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTag = async (req, res) => {
  const tag = req.body;
  const newTag = new Tag(tag);
  try {
    await newTag.save();
    res.status(201).json(newTag);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTag = async (req, res) => {
  const { id: _id } = req.params;
  const tag = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: "No tag with that id" });
    }
    const updatedTag = await Tag.findByIdAndUpdate(
      _id,
      { ...tag, _id },
      { new: true }
    );
    res.status(200).json(updatedTag);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTag = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: "No tag with that id" });
    }
    await Tag.findByIdAndRemove(_id);
    res.status(200).json({ message: "Tag deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
