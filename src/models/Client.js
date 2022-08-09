import {Schema, model} from "mongoose";

const ClientSchema = new Schema({
    Name:String,
    Surname:String,
    IdCard:Number,
    Age:Number,
    PhoneNumber:Number,
    Email:String
},{
    timestamps:true,
    versionkey:false,
})

export default model('Client',ClientSchema)