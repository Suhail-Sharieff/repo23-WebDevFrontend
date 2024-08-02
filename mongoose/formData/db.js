import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
})
const collectionName='Employee'
export const db=mongoose.model(collectionName,schema)