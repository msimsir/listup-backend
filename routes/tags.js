import express from "express";
import {
  getTags,
  createTag,
  updateTag,
  deleteTag,
} from "../controllers/tags.js";

const router = express.Router();

router.get("/", getTags);
router.post("/", createTag);
router.patch("/:id", updateTag);
router.delete("/:id", deleteTag);

export default router;
