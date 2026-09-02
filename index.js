import express from 'express'
import dotenv from "dotenv"
import { connectToDb } from './config/db.js'
import route from './src/route/recipeRoute.js'
dotenv.config()

const app = express()

app.use(express.json())

// get recipe details POST /api/recipe/recipeDetails
app.use("/api/recipe", route)

app.get("/", (req, res) => {
    res.send("Hello from get request!")
})

app.listen(3000, () => {
    connectToDb()
    console.log("server is running")
})