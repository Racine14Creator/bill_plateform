import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import path from 'path';
dotenv.config({path: ".env"})

const app = express(),
  PORT = process.env.PORT || 3001,
  DB = process.env.MONGO_URI

// DB run

// Middlewares

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use('/assets',express.static('public'))

app.get("/", (req, res)=>{
  res.render("Home")
})

const Server = () => {
  app.listen(PORT, (err) => {
    if(err) throw err
    console.log(`Server is running on Port: http://localhost:${PORT}`)
  })
}
Server()