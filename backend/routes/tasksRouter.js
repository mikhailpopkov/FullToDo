import express from "express";
import tasksController from "../controllers/tasksController.js";

const router = express.Router();

router.post("/", tasksController.create);
router.delete("/:id", tasksController.delete);
router.get("/", tasksController.getAll);

export default router