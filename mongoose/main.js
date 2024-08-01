import mongoose from "mongoose"
import express from"express"
import { Todo } from "./models/TodoDBHandler.js"


//connect by copying the connection string from the mongoo DB dashboard
const dbName='todoDB'
let conn=await mongoose.connect(`mongodb://localhost:27017/${dbName}`)

const app=express()
const port=3000


app.get('/',async (req,res)=>{
    const todo=new Todo({title:"First",task:"Clean House",isDone:false})
    todo.save()//now db will have this on ach run
    res.json({title:todo.title,task:todo.task})
})

app.get('/getAllTodosAsJSON',async(req,res)=>{//http://localhost:3000/getAllTodosAsJSON
    const all=await Todo.find()
    res.json(all)
})

app.listen(port,()=>{
    console.log(`Launched http://localhost:${port}`);
})

