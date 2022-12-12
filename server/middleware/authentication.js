const jwt=require('jsonwebtoken')
const User=require('../models/user')
const CustomAPIError = require('../errors/custom-error')

const auth = async(req,res,next) => {
    try {
        const token = req.cookies.jwtToken
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        const rootUser = await User.findOne({ _id: verifyToken._id })
        if (!rootUser) {
            throw new CustomAPIError("user not found",404)
        }
        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id
        next()
    } catch (error) {
        throw new CustomAPIError("unauthorized user",401)
    }
}

module.exports=auth