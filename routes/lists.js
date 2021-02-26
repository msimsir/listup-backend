import express from "express";
import {
  getLists,
  createList,
  updateList,
  deleteList,
  getTasksFromList,
  getRoutinesFromList,
} from "../controllers/lists.js";

const router = express.Router();

router.get("/", getLists);
router.post("/", createList);
router.patch("/:id", updateList);
router.delete("/:id", deleteList);
router.get("/:id", getTasksFromList);
router.get("/:id", getRoutinesFromList);

export default router;
