import { User } from "../model/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const emailExist = await User.findOne({ email })
        if (emailExist) {
            return res.status(409).json({
                success: false,
                message: "Email is already Exist"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ name, email, password: hashedPassword })

        return res.status(201).json({
            success: true,
            message: "User created Successfully",
            data: newUser
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error in creating new user",
            error: err.message
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const checkEmailExist = await User.findOne({ email })
        if (!checkEmailExist) {
            return res.status(401).json({
                success: false,
                message: "Email or password does not exist",
            })
        }
        const checkPassword = await bcrypt.compare(password, checkEmailExist.password)
        if (!checkPassword) {
            return res.status(401).json({
                success: false,
                message: "Email or password does not exist",
            })
        }
        const token = jwt.sign({ _id: checkEmailExist._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error in logging user",
            error: err.message
        })
    }
}