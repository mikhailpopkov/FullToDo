class UserController {
    async registration(req, res) {}

    async login(req, res) {
        res.json({ success: true });
    }

    async check(req, res) {}
}

export default new UserController();