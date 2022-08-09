import {Schema, model} from "mongoose";
import Role from "./Role";
import State from "./State";

import bcrypt from "bcryptjs";

const userSchema = new Schema({
    userName:{
        type:String
    },
    userSurname:{
        type:String
    },
    userEmail:{
        type:String,
        
    },
    userIdCard:{
        type:Number,
        
    },
    userPhoneNumber:{
        type:String,
        
    },
    userAge:{
        type:Number
    },
    password:{
        type:String,
        
    },
    role:[{
        ref:Role,
        type: Schema.Types.ObjectId
    }],
    state:[{
        ref:State,
        type: Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
})

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password,receivedPassword) =>{
    return await bcrypt.compare(password,receivedPassword);
}

export default model('User',userSchema);

