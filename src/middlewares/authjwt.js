import jwt from "jsonwebtoken"
import config from "../config/config"
import User from "../models/User"
import Role from "../models/Role"

export const verifyToken = async (req,res,next) => {
    try {
    const token = req.headers["x-access-token"]

    if(!token) return res.status(403).json({message: "no token provided"})
    
    const decoded = jwt.verify(token,config.SECRET)

    const user = await User.findById(decoded.id,{password:0})

    if(!user) return res.status(404).json({message: "no user found"})
    
    next()
    } catch (error) {
    
    return res.status(401).json({message: "unauthorzed"})

    }
}

export const isAdmin = async (req,res,next) => {

    const token = req.headers["x-access-token"]
    const decoded = jwt.verify(token,config.SECRET)
    
    const user = await User.findById(decoded.id,{password:0})
    const rol =await Role.find({_id:{ $in: user.role}})
    
    for(let i=0; i<rol.length;i++){
        if(rol[i].name === 'admin'){
            next()
            return;
        }
        
    }

    return res.status(403).json({message: "require admin role"});
}

 
export const isActived = async (req,res,next) => {

    const token = req.headers["x-access-token"]
    const decoded = jwt.verify(token,config.SECRET)
    
    const user = await User.findById(decoded.id,{password:0})
    const rol =await Role.find({_id:{ $in: user.role}})
    
    for(let i=0; i<rol.length;i++){
        if(rol[i].name === 'admin'){
            next()
            return;
        }
        
    }

    return res.status(403).json({message: "require admin role"});
}
