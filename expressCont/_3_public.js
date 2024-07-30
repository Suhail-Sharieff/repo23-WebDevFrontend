import express from "express"
const app=express()
const port=3000

//to display the txt file stored in publicStaticDisplay folder via link use:
app.use(express.static('C:\\Users\\suhai\\Desktop\\repo23-WebDevFrontend\\expressCont\\publicStaticDisplay'))//http://localhost:3000/toDisplay.txt
//remmeber to make single slah as doublle in path url--IMP


app.listen(port,()=>{
	console.log(`Listening on port numbered ${port}`);
})