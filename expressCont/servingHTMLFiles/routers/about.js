import express from "express"



const aboutRouter=express.Router()


aboutRouter.get('/one',(req,res)=>{//http://localhost:3000/about/one
    res.send("about one opened")
})
aboutRouter.get('/two',(req,res)=>{//http://localhost:3000/about/two
    res.send("about two opened")
})
aboutRouter.get('/three',(req,res)=>{//http://localhost:3000/about/three
    res.send("about three opened")
})


//its IMP TO EXPORT IT into main.js
export default aboutRouter