import mongoose, { Schema } from "mongoose";

const userRecipeRequest = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    }, goal: {
        type: String,
        enum: ["fat_loss", "muscle_gain", "maintenance"],
        required: true
    },
    dietType: {
        type: String,
        enum: ["vegetarian", "non_vegetarian", "vegan", "eggetarian"],
        required: true
    }, targetCalories: {
        type: Number,
        required: true
    }, mealType: {
        type: String,
        enum: ["breakfast", "lunch", "dinner", "mid_morning", "evening_snacks"],
        required: true
    },
    meals: [{
        mealName: {
            type: String,
        }, prepTime: {
            type: Number,
            default: 15
        }, people: {
            type: Number,
            default: 1
        }, ingredients: [
            {
                item: String,
                quantity: String,
            },
        ],
        instructions: [{ type: String }],
        macros: {
            calories: { type: Number, default: 0 },
            protein: { type: Number, default: 0 },
            carbs: { type: Number, default: 0 },
            fats: { type: Number, default: 0 },
        },
    }],
    isFavourite: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export const RecipeDetails = mongoose.model("RecipeRequest", userRecipeRequest)