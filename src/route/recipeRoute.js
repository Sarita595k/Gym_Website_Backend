import { Router } from "express";
import { generateGeminiRecipes } from "../controller/receipeController.js";
const route = Router()

route.post("/recipeDetails", generateGeminiRecipes)

export default route