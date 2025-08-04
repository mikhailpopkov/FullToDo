import ApiError from "../error/ApiError.js";

class UserController {
    async registration(req, res) {}

    async login(req, res) {
        res.json({ success: true });
    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest("Пользователь не авторизован"));
        }
        res.json(id);
    }
}

export default new UserController();