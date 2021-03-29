import mongoose from "mongoose";
import SubTask from "../models/subTask.js";
import Task from "../models/task.js";

export const getSubTasks = async (req, res) => {
  try {
    const subTasks = await SubTask.find();
    res.status(200).json(subTasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSubTask = async (req, res) => {
  const { title, status } = req.body;
  const newSubTask = new SubTask({ title, status });
  try {
    await newSubTask.save();
    res.status(201).json(newSubTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateSubTask = async (req, res) => {
  const { id: _id } = req.params;
  const subTask = req.body;
  try {
    const updatedSubTask = await SubTask.findByIdAndUpdate(
      _id,
      {
        ...subTask,
        _id,
      },
      { new: true }
    );
    res.status(200).json(updatedSubTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteSubTask = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: "No subtask with that id" });
    }

    const subTaskOnTask = await Task.findOne({ subtasks: [_id] });
    if (subTaskOnTask !== null) {
      await subTaskOnTask.subtasks.pull(_id).remove();
      subTaskOnTask.save();
    }
    const deletedSubTask = await SubTask.findByIdAndRemove(_id);
    res.status(200).json(deletedSubTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
