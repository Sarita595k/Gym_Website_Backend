import mongoose, { Schema } from "mongoose"
const swapDetails = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, userMealName: {
        type: "String",
        required: true,
        lowercase: true,
        trim: true
    }, userMacros: {
        calories: { type: Number, default: 0 },
        protein: { type: Number, default: 0 },
        carbs: { type: Number, default: 0 },
        fats: { type: Number, default: 0 },
    }, swapMealName: {

    }
})