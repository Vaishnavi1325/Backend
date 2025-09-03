import dotenv from "dotenv"
import connect_DB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path:'/custom/path/.env'
})



connect_DB()

.then(()=>{
  app.on("error",(error)=>{
    console.log("Error while running server",error);
    throw error;
  })
  app.listen(process.env.PORT || 3000,()=>{
    console.log( `Server is running at port ${process.env.PORT}`);
    
  })
})
.catch((error)=>{
    console.log("Error occured",error)
})









/*
import express from "express";
const app=express();

(async ()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("Application not able to talk to DB: ",error)
      throw error;
    })
    app.listen(process.env.PORT,()=>{
      console.log(`application running on port ${process.env.PORT}`);
      
    })
  }
  catch(error){
    console.error("ERROR: ",error)
    throw error
  }
})()
  */