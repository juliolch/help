import {Schema,model} from "mongoose";

const stateSchema = new Schema({
    name:String
},{
    versionKey:false
})
export default model('State', stateSchema);