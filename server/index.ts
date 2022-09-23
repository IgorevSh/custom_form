// @ts-ignore
import express from 'express'
const mongoose = require('mongoose')
const app = express();
import router from "./router";
require('dotenv').config()
// @ts-ignore
import cors from "cors";
app.use(express.json());

app.use(cors({ origin: "*"}));
app.use('/form',router)

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_LINK)
        app.listen(3000, "0.0.0.0", () => {
            console.log("Сервер ожидает подключения...");
        });
    } catch (e) {
        console.error(e);
    }
};
start()
