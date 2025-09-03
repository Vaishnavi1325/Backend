import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials:true
}))       //"use" is for the use of all the middleware and configurations

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())       //in order to perform crud operations on cookies
export default app