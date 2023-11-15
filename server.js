import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import suscribe from "./routers/suscribe.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import path from 'path';
dotenv.config({ path: ".env" })

const app = express(),
  PORT = process.env.PORT || 3001;

// DB run

// Middlewares

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use('/assets', express.static('public'))

app.get("/", (req, res) => {
  res.render("Home")
})

app.use("/suscribe", suscribe)

mongoose
  .connect(process.env.DB,).then(_ => {
    app.listen(PORT, () => console.log(`Server Port: localhost:${PORT}`));
    // To run it once
    console.log("MongoDB connected")
  }).catch((err) => console.log(`${err} did not connect`));