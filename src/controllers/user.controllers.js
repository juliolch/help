import User from '../models/User'
import Role from '../models/Role'
import State from '../models/State'
import jwt from 'jsonwebtoken'
import config from '../config/config'

export const singIn = async (req, res) => {
    const userFound = await User.findOne({userEmail:req.body.userEmail}).populate("role").populate("state");
    
    if(!userFound) return res.json({message: "user not found"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.json({token:null, message: "invalid password"})
    
    const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn:86400
    })
    res.json(token)
}

export const singUp = async (req, res) => {
    const{userName,userSurname,userEmail,userIdCard,userPhoneNumber,userAge,password,role,state}=req.body;
    const newUser = new User({
        userName,
        userSurname,
        userEmail,
        userIdCard,
        userPhoneNumber,
        userAge,
        password: await User.encryptPassword(password)
    })

    if(role){
        const foundRole = await Role.find({name:{$in:role}})
        newUser.role = foundRole.map(role => role._id)
    }else{
        const roles = await Role.findOne({name:"user"})
        newUser.role = [roles._id];
    }

    if(state){
        const foundState = await State.find({name:{$in:state}})
        newUser.state = foundState.map(state => state._id)
    }else{
        const states = await State.findOne({name:"active"})
        newUser.state = [states._id];
    }


    const saveUser = await newUser.save();
    console.log(saveUser);
    
    const token = jwt.sign({id: saveUser._id},config.SECRET,{
        expiresIn:86400 //24hours
    })

    res.json(token)
}