import express from "express";
import { registrationValidation } from "../validation/registration.js";
import { validationResult } from "express-validator";

const router = express.Router();

router.post("/registration", registrationValidation(), (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    res.json({ status: "ok" });
})

export default router;