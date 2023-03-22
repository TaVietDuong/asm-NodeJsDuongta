import mongoose from "mongoose";
 
 const producstSchema = new mongoose.Schema({
    name:{
        type:String
    },
     price:{
        type:Number
     },
     desc:{
        type:String
     },
     status:{
        type:Boolean
     }
 })
 export default mongoose.model("products",producstSchema);