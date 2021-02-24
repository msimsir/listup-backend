import express from "express";
import { getTasks, createTask } from "../controllers/tasks";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);

export default router;
