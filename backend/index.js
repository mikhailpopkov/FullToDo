import dotenv from "dotenv";
dotenv.config();
import express from "express";
import sequelize from "./db.js";
import cors from "cors";
import models from "./models/models.js";
import userRouts from "./routes/userRouter.js";

const PORT = process.env.PORT || 7000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRouts);

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