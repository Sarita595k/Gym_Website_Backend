// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    // 1. Read token from header: "Bearer"
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Please login first to access this feature."
        });
    }

    try {
        // 2. Mathematically verify the signature using your secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Attach user data to request object so downstream routes can use it
        req.user = {
            ...decoded,
            _id: decoded._id || decoded.userId || decoded.id
        };

        next(); // Pass control to the actual controller
    } catch (err) {
        return res.status(403).json({
            success: false,
            message: "Please login first to access this feature."
        });
    }
};