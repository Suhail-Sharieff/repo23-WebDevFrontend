// like u have many subpages under say "home/intro-to-python","home/into-to-java" etc,it is nonsense to again and again 

/*
//OLD CODE:
import express from "express"
const app=express()
const port=3000
app.get('/welcome/Suhail',(req,res)=>{
    res.send("Wecome Suhail")
})
app.get('/welcome/Shareiff',(req,res)=>{
    res.send("Wecome Shareiff")
})
app.get('/welcome/Reahn',(req,res)=>{
    res.send("Wecome Reahn")
})
*/

//NEW CODE
import express from "express"
const app=express()
const port=3000
app.get('/welcome/:slug',(req,res)=>{//http://localhost:3000/welcome/suhail
    res.send(`Welcome ${req.params.slug}`)
})
app.get('/welcome/:slug/:second',(req,res)=>{//http://localhost:3000/welcome/suhail/shareiff
    res.send(`Welcome ${req.params.slug} and also ${req.params.second}`)
})

app.listen(port,()=>{
	console.log(`Listening on port number ${port}`);
})


//QUERIES
//ex://http://localhost:3000/welcome/suhail?mode=dark&&region=in
//here mode=dark and region is query