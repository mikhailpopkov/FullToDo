import dotenv from "dotenv";
dotenv.config();
import express from "express";
import sequelize from "./db.js";
import cors from "cors";
import { User, Tasks, TasksList, Readiness } from "./models/models.js";
import router from "./routes/index.js";
import errorHandler from "./middleware/ErrorMiddleware.js";

const PORT = process.env.PORT || 7000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`);});
    } catch (error) {
        console.log(error);
    }
}

start();