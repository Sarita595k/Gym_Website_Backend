import express from 'express'
import dotenv from "dotenv"
import { connectToDb } from './config/db.js'
dotenv.config()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello from get request!")
})

app.listen(3000, () => {
    connectToDb()
    console.log("server is running")
})