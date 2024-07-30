import express from "express"



const homeRouter=express.Router()

homeRouter.get('/one',(req,res)=>{//http://localhost:3000/home/one
    res.send("home one opened")
})
homeRouter.get('/two',(req,res)=>{//http://localhost:3000/home/two
    res.send("home two opened")
})
homeRouter.get('/three',(req,res)=>{//http://localhost:3000/home/three
    res.send("home three opened")
})


//its IMP TO EXPORT IT into main.js
export default homeRouter