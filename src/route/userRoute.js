import express from "express"
import { loginUser, registerUser } from "../controller/userController.js"
// import { verifyToken } from "../middleware/jwt.js"
const routes = express.Router()

routes.post("/register", registerUser)

routes.post("/login", loginUser)
export default routes