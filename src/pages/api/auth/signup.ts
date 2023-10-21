
import User from "../../../models/User"
import connectDB from "../../../middlewares/connectDB";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method == "POST") {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        try {

            let user = new User({
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword,
                isBlocked: req.body.isBlocked,
                isPremium: req.body.isPremium,
                isAdmin: req.body.isAdmin
            })
            
            await user.save();
            return res.status(200).json({type: "success", message: "Account created successfully" })
        }
        catch(err:any) {
            return res.status(200).json({type: "error", message: "ERROR", errorCode: err.code })
            
        }
    }
    
    else {
        return res.status(200).json({type: "error", message: "ERROR: Not Allowed" })
    }
}


export default connectDB(handler); 