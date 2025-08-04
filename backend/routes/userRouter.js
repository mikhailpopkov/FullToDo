import express from "express";
import { registrationValidation } from "../validation/registration.js";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post("/registration", registrationValidation(), userController.registration)
router.post("/login", userController.login)
router.get("/auth", userController.check)

export default router;