import { body } from "express-validator";

export const registrationValidation = () => {
    return [
        body("email").isEmail().trim(),
        body("password").isLength({ min: 5 }).trim(),
        body("name").isLength({ min: 2 }).trim(),
    ];
};