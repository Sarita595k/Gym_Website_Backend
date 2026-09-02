import mongoose, { Schema } from "mongoose";

constuserRecipeRequest = new Schema.mongoose({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
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
    },
    // meals: [{
    mealType: {
        type: String,
        enum: ["breakfast", "lunch", "dinner", "mid_morning", "evening_snacks"],
        required: true
    }
    // }, name: {
    //     type: String,
    //     required: true
    // }, prepTime: {
    //     type: Number,
    //     required: true
    // }
    // }]
}, {
    timestamps: true
})

export const RecipeDetails = mongoose.model("RecipeRequest", userRecipeRequest)