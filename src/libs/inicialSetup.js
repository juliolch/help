import Role from '../models/Role'

import State from '../models/State'

export const createRoles = async () => {

    try{
    const countRoles = await Role.estimatedDocumentCount();
    if(countRoles > 0) return;

    const values = await Promise.all([

    new Role({name:"user"}).save(),
    new Role({name:"admin"}).save()
    
    ])

    console.log(values);

    }catch(error){
        console.error(error);
    }
}

export const createStates = async () => {

    try{
        const countStates = await State.estimatedDocumentCount();
        if(countStates > 0) return;
    
        const values = await Promise.all([
    
        new State({name:"active"}).save(),
        new State({name:"inactive"}).save()
        
        ])
    
        console.log(values);
    
        }catch(error){
            console.error(error);
        }
}