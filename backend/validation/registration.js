import { body, validationResult } from "express-validator";

export const registrationValidation = () => {
    return [
        body("email").isEmail().trim(),
        body("password").isLength({ min: 5 }).trim(),
        body("name").isLength({ min: 2 }).trim(),
        (req, res, next) => {
            const result = validationResult(req);
            if (!result.isEmpty()) {
                return result.status(400).json({ success: false, errors: result.array() });
            }
            next();
        }
    ];
};