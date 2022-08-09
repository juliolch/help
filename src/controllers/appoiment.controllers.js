import Appoiment from '../models/Appointment';

export const createAppoiment = async (req,res) => {
    
    const{date,hour,description,client}=req.body;
    
    const newAppoiment = new Appoiment({date,hour,description});

    const appoimnetSave  = await newAppoiment.save();

    res.json(appoimnetSave)
}

export const getAppoimnet = async (req,res) => {
    const Appoiments = await Appoiment.find();
    res.json(Appoiments);    
}

export const getAppoimentsById = async (req,res) => {
    const appoiment = await Appoiment.findById(req.params.appoimentId)
    res.json(appoiment);
}

export const updateAppoimentsById = async (req,res) => {
    const updatedAppoiment = await Appoiment.findByIdAndUpdate(req.params.AppoimentId, req.body,{
        new:true
    })
    res.json(updatedAppoiment);
}


export const DeleteAppoiment = async (req,res) => {
    const deletedAppoiment = await Appoiment.findByIdAndDelete(req.params.AppoimentId)
    res.json(deletedAppoiment)
}