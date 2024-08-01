//this makesDB
import mongoose from "mongoose";

//using mongoose we can decide that our title must b a string,task mush be a string,bu tin mongoDB we had to use if and else to authonticate the same
const TodoSchema=new mongoose.Schema({
    title:String,
    task:String,
    isDone:Boolean
})

export const Todo=mongoose.model('TodoDBHandler',TodoSchema)