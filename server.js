import express from "express";
import { dbConnect } from "./src/config/dbConnect.js";
import todoRoute from "./src/route/todoRoute.js";
import dotenv from "dotenv";

const app=express();
dotenv.config();

const port=process.env.PORT || 9001;

app.use(express.json());
app.use('/',todoRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

dbConnect();

app.listen(port, ()=>{
    console.log(`Server running at port: ${port}`);
});