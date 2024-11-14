import express from "express";
import bycryt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
import { jwtSecret } from "../utills/secrets.utills.js";

const router = express.Router();

router.post('/login', async (req, res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({where : {username}});
        if(!user){
            res.status(400).json({ message: 'Invalid credentials.' })
        }
        // Check password
        const isPasswordValid = await bycryt.compare(password, user.password);
        if(!isPasswordValid){
            res.status(400).json({ message: 'Invalid credentials.' })
        }
        const token = jwt.sign({userId:user.id}, jwtSecret, {expiresIn: '1h'})
        res.json({token})
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
})
router.post('/register', (req, res)=>{})
