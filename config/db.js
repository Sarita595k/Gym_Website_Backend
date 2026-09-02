import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Db connected successfully")
    } catch (err) {
        console.log("Error in connecting db", err)
    }
}