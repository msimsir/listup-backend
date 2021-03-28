import mongoose from "mongoose";
import List from "../models/list.js";

export const getLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json(lists);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createList = async (req, res) => {
  const list = req.body;
  const newList = new List(list);
  try {
    await newList.save();
    res.status(201).json(newList);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateList = async (req, res) => {
  const { id: _id } = req.params;
  const list = req.body;
  try {
    const updatedList = await List.findByIdAndUpdate(
      _id,
      {
        ...list,
        _id,
      },
      { new: true }
    );
    res.status(200).json(updatedList);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteList = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: "No list with that id" });
    }
    const deletedList = await List.findByIdAndRemove(_id);
    res.status(200).json(deletedList);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getTasksFromList = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const tasks = await List.findOne(_id).populate("tasks");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRoutinesFromList = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const routines = await List.findOne(_id).populate("routines");
    res.status(200).json(routines);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
