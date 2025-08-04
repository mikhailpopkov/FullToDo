import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
});

const Tasks = sequelize.define("tasks", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    color: { type: DataTypes.STRING },
    completed: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const TasksList = sequelize.define("tasksList", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
});

const Readiness = sequelize.define("readiness", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    readiness: { type: DataTypes.BOOLEAN, defaultValue: false },
});

User.hasMany(Tasks);
Tasks.belongsTo(User);

Tasks.hasMany(TasksList);
TasksList.belongsTo(Tasks);

Tasks.hasOne(Readiness);
Readiness.belongsTo(Tasks);

export { User, Tasks, TasksList, Readiness };
