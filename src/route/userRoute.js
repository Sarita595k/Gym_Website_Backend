import express from "express"
import { loginUser, registerUser } from "../controller/userController.js"
const routes = express.Router()

routes.post("/register", registerUser)

routes.post("/login", loginUser)
export default routes