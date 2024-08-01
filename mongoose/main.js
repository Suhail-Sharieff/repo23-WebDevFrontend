import mongoose from "mongoose"
import express from"express"
import { Todo } from "./models/TodoDBHandler.js"


//connect by copying the connection string from the mongoo DB dashboard
const dbName='todoDB'
let conn=await mongoose.connect(`mongodb://localhost:27017/${dbName}`)

const app=express()
const port=3000


app.get('/',(req,res)=>{
    const todo=new Todo({title:"First",task:"Clean House",isDone:false})
    todo.save()//now db will have this on ach run
    res.send("Hello")
})
app.listen(port,()=>{
    console.log(`Launched http://localhost:${port}`);
})

