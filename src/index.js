import dotenv from "dotenv";
import connectDb from "./db/index.js";
dotenv.config({
  path: "./env",
});
// seconde approche

connectDb();

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
