export const getDetails = async (req, res) => {
    try {
        const { goal, dietType, targetCalories, mealType } = req.body

        if (!goal || !dietType || !targetCalories || !mealType) {
            return res.status(400).json({
                success: false,
                messgae: "all fields are required"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Thank you for your details",
            data: { goal, dietType, targetCalories, mealType }
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error in getting user recipe details",
            error: err.message
        })
    }
}