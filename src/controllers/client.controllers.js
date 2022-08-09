import Client from '../models/Client';

export const createClient = async (req,res) => {
    
    const{Name,Surname,IdCard,Age,PhoneNumber,EmailAddress}=req.body;
    
    const newClient = new Client({Name,Surname,IdCard,Age,PhoneNumber,EmailAddress});

    const clientSave  = await newClient.save();

    res.status(201).json(clientSave)
}

export const getClients = async (req,res) => {
    const Clients = await Client.find();
    res.json(Clients);    
}

export const getClientById = async (req,res) => {
    const client = await Client.findById(req.params.clientId)
    res.json(client);
}

export const updateClientById = async (req,res) => {
    const updatedClient = await Client.findByIdAndUpdate(req.params.clientId, req.body,{
        new:true
    })
    res.json(updatedClient);
}


export const DeleteClient = async (req,res) => {
    const deletedClient = await Client.findByIdAndDelete(req.params.clientId)
    res.json(deletedClient)
}