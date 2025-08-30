import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_DB=async()=>{
  try{
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n Databse connected!! DB HOST: ${connectionInstance.connection.host} `);
    
  }
  catch(error){
    console.log("Error in connection to DB",error)
    process.exit(1);
  }

}
export default connect_DB;