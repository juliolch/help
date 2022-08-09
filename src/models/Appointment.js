import { Schema,model } from "mongoose";
import Client from "./Client";

const AppoimentSchema = new Schema({
    date:String,
    hour:String,
    description:String,
    client:[{
        ref:Client,
        type: Schema.Types.ObjectId
    }]
},{

    timestamps:true,
    versionkey:false
})

export default model('Appoiment',AppoimentSchema)