import mongoose from "mongoose";
import Task from "../models/task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;
  const newTask = new Task(task);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const task = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: "No task with that id" });
    }
    const updatedTask = await Task.findByIdAndUpdate(
      _id,
      {
        ...task,
        _id,
      },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: "No task with that id" });
    }
    await Task.findByIdAndRemove(_id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
