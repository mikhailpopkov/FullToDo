import {Tasks} from "../models/models.js";

class tasksController {

    async create(req, res) {
        const {title, color} = req.body;
        const task = await Tasks.create({title, color});
        return res.json(task);
    }

    async delete(req, res) {
        const {id} = req.params;
        const task = await Tasks.destroy({where: {id}});
        return res.status(200).json(`Удалена таска под номером ${task}`);
    }

    async getAll(req, res) {
        const tasks = await Tasks.findAll();
        return res.json(tasks);
    }

}

export default new tasksController();