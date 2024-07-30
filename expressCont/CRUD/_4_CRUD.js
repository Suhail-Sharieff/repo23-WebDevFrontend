import express from "express"
const app=express()
const port=3000

//CRAETE/POST
app.use(express.static('C:\\Users\\suhai\\Desktop\\repo23-WebDevFrontend\\expressCont\\CRUD\\crudPublic'))
app.post('/post',(req,res)=>{//see post.html's script//http://localhost:3000/post.html
    res.send("its post req")
})
//this would send "its post req" to the html file's script which is fetching http://localhost:3000/post.html
//READ
app.get('/get',(req,res)=>{//http://localhost:3000/get
    res.send("its get req")
})

//UPDATE
app.put('/put',(req,res)=>{
    res.send("its update/put req")
})

//DELETE


app.listen(port,()=>{
	console.log(`Listening on port numbered ${port}`);
})