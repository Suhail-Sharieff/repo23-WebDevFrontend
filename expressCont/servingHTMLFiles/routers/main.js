import express from "express"
import aboutRouter from "./about.js"
import homeRouter from "./home.js"



const app=express()
const port=3000

//we want all subpages within homw is handled by home.js and about by about.js rather than all hanfling within a single .js file
const router=express.Router()
app.use('/home',homeRouter)
app.use('/about',aboutRouter)

app.listen(port,()=>{
	console.log(`Listening on port number ${port}`);
})
