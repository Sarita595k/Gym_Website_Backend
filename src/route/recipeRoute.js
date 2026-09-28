import { Router } from "express";
import { generateGeminiRecipes } from "../controller/receipeController.js";
import { verifyToken } from "../middleware/jwt.js";
const route = Router()

route.post("/recipeDetails", verifyToken, generateGeminiRecipes)

export default route