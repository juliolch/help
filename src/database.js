import mongoose from "mongoose";

(async () => {
    
    try{
    
        const db = await mongoose.connect('mongodb://127.0.0.1/Orthodontics_Center',{
            useNewUrlParser:true,
            useUnifiedTopology:true,       
        });

        console.log('data base is connected');
     
    }catch(error){

        console.log(error);
    
    }
})();


