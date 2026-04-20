import mongoose from "mongoose";

const url="mongodb+srv://sattwikghosh2_db_user:new-password@cluster0.os138pf.mongodb.net/?appName=Cluster0";

export async function dbConnect(){
    try {
        await mongoose.connect(url);
        console.log("MongoDB is now connected.");
    } catch (error) {
        console.log("MongoDB not connected: ",error);
    }
}