import { Router } from "express";
import { getDetails } from "../controller/receipeController.js";
const route = Router()

route.post("/recipeDetails", getDetails)

export default route