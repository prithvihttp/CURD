import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect('')
console.log('MOngoDB Connected!!!!');
    } catch (error) {
        console.log("MongoDB Connection Failed",error.message);
        process.exit(1);  //it terminate the code
        
        
    }
}
