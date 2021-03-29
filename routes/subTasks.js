import express from "express";
import {
  getSubTasks,
  createSubTask,
  updateSubTask,
  deleteSubTask,
} from "../controllers/subTasks.js";

const router = express.Router();

router.get("/", getSubTasks);
router.post("/", createSubTask);
router.patch("/:id", updateSubTask);
router.delete("/:id", deleteSubTask);

export default router;
