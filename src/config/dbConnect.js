import mongoose from "mongoose";

export async function dbConnect(){
    const url=process.env.MDB_URL;
    try {
        await mongoose.connect(url);
        console.log("MongoDB is now connected.");
    } catch (error) {
        console.log("MongoDB not connected: ",error);
    }
}