import express from "express"
import { db } from "./db.js"
import mongoose from "mongoose"

const app=express()
const port =3000

const dbName='company'
let connection=await mongoose.connect(`mongodb://localhost:27017/${dbName}`)
app.get('/',(req,res)=>{
    res.sendFile('C:\\Users\\suhai\\Desktop\\repo23-WebDevFrontend\\mongoose\\dummyDataGenerator\\index.html')
})
app.get('/make',async (req,res)=>{
    const employees = [
        new db({name: "x1", salary: "20", language: "Python", city: "Bnglr", isManager: false}),
        new db({name: "x2", salary: "25", language: "Java", city: "Mumbai", isManager: true}),
        new db({name: "x3", salary: "30", language: "JavaScript", city: "Delhi", isManager: false}),
        new db({name: "x4", salary: "22", language: "C++", city: "Chennai", isManager: true}),
        new db({name: "x5", salary: "28", language: "Ruby", city: "Hyderabad", isManager: false}),
        new db({name: "x6", salary: "35", language: "Go", city: "Pune", isManager: true}),
        new db({name: "x7", salary: "40", language: "Swift", city: "Kolkata", isManager: false}),
        new db({name: "x8", salary: "32", language: "PHP", city: "Ahmedabad", isManager: true}),
        new db({name: "x9", salary: "27", language: "C#", city: "Bangalore", isManager: false}),
        new db({name: "x10", salary: "33", language: "TypeScript", city: "Jaipur", isManager: true})
    ];
        try {
            for (let employee of employees) {
                await employee.save();
            }
            res.send('Data added successfully');
        } catch (error) {
            res.status(500).send('Error adding data');
        }
    
        
    
})

app.get('/erase',async (req,res)=>{
    try {
        await db.deleteMany({});
        res.send('Data erased successfully');
    } catch (error) {
        res.status(500).send('Error erasing data');
    }
})

app.get('/getAllAsJSON',async(req,res)=>{
    const employyess=await db.find()
    res.json(employyess)
})

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`);
    
})