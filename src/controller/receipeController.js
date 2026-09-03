import { GoogleGenAI } from "@google/genai"

export const generateGeminiRecipes = async (req, res) => {
    try {
        const Ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
        // console.log("api key", process.env.GEMINI_API_KEY)
        const { goal, dietType, targetCalories, mealType } = req.body
        if (!goal || !dietType || !targetCalories || !mealType) {
            return res.status(400).json({
                success: false,
                message: "All fields (goal, dietType, targetCalories, mealType) are required.",
            });
        }
        const systemInstruction = `You are an expert sports nutritionist and Indian fitness chef for Avsar Gym.
Your task is to generate exactly 2 distinct, high-protein Indian recipe suggestions based on the user's parameters.

RULES:
1. Return ONLY a valid, raw JSON array containing exactly two recipe objects.
2. Do NOT include markdown code blocks or backticks.
3. Use realistic Indian staples (paneer, soya chunks, sprouts, eggs, chicken, millets, oats, sattu).
4. Keys must exactly match: mealName (String), prepTime (Number),
 people (Number), ingredients (Array of {item, quantity}), instructions
 (Array of String), macros ({calories, protein, carbs, fats} as Numbers).`;

        const userPrompt = `Generate 2 recipe options for:
- Physique Goal: ${goal}
- Diet Type: ${dietType}
- Target Calories: ${targetCalories} kcal
- Meal Type: ${mealType}`;

        const response = await Ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userPrompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                temperature: 0.3
            }
        })

        const parsedData = JSON.parse(response.text)

        return res.status(200).json({
            success: true,
            message: "recipes fetched successfully",
            data: parsedData
        });

    } catch (err) {
        return res.status(500).json({
            message: "Error in connecting to generate recipes"
        })
    }
}