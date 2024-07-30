import express from "express"
const app=express()
const port=3000

app.get('/openCall',(req,res)=>{//http://localhost:3000/openCall
    //this opens call.html file
    res.sendFile('C:\\Users\\suhai\\Desktop\\repo23-WebDevFrontend\\expressCont\\servingHTMLFiles\\call.html')
})

app.get('/openJSON',(req,res)=>{
    res.json({
        "a":1,
        "b":2,
        "c":3
    })
})

app.listen(port,()=>{
	console.log(`Listening on port number ${port}`);
})
