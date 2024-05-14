import dotenv from "dotenv";
import connectDb from "./db/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app } from "./app.js";
// import express, { urlencoded } from "express";
dotenv.config({
  path: "./env",
});
// seconde approche
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
connectDb()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("server is runing ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("mongo de connect nhi hua ", serr);
  });

// first approches

// ;(async()=>{
//         try{
//          await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME  }`)
//          app.on("error",(err)=>{
//           console.log("connect nhi hua ............",err);
//           throw err
//          })
//          app.listen(process.env.PORT,()=>{
//           console.log(`app is running ${process.env.PORT}`);
//          })
//         }catch(erro){
//             console.error("error agaay",erro);
//             throw erro
//         }
// })()
