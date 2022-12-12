const User = require('../models/user')
const CustomAPIError=require('../errors/custom-error')
const bcrypt=require('bcryptjs')

const register = async (req, res) => {
    const {name,email,password}=req.body
    if (!name || !email || !password) {
        throw new CustomAPIError("enter valid credentials",422)
    }
    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
        throw new CustomAPIError('Email already exists',400);
    }
    const user=await User.create({name,email,password})
    res.status(201).json({user})
}

const login = async (req, res) => {
    const { email, password } = req.body
    
    if (!email || !password) {
        throw new CustomAPIError('Please provide email and password',400)
    }


    const user = await User.findOne({ email })
    if (!user) {
        throw new CustomAPIError('Invalid credentials', 401)
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if (!isMatch) {
        throw new CustomAPIError('Invalid credentials', 401)
    }


    const token = user.createJWT()
    res.cookie("jwtToken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly:true
    })
    res.status(200).json({name:user.name,token})
}

module.exports = { register, login }