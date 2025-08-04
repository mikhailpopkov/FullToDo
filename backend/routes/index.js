import { Router } from "express";
import userRouter from "./userRouter.js";
import tasksRouter from "./tasksRouter.js";

const router = new Router();
router.use("/user", userRouter);
router.use("/tasks", tasksRouter);

export default router;