import express from 'express'
const app = express()

app.get("/", (req, res) => {
    res.send("Hello from get request!")
})

app.listen(3000, () => {
    console.log("server is running")
})