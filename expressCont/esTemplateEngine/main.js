import express from "express"
import path from "path"
const app=express()
const port=3000

//EJS:embedded javascript 
// suppose u want to display index.htl in views folder,u can use res.send(filePath)..its obvious

//but now suppose u want to send some variable(in industry,data from db) from JS file to html file follow these:
/**
 * terminal: npm i ejs
 * instaed of "templates", use "views" folder
 * instead on index.html, u need to use "index.ejs"(i hve created simply index.html to distingiush)
 * use index.ejs normally like html file
 * suppose u want to send "userName" variable's value from this main.js to index.ejs, in index.ejs use syntax "<%=userName%>" wherever u wanna display it
 * in main.js file use app.render(filePath of .ejs file where u want t send data) instaed of app.sendFile()
 * syntax:(ex:)
 * app.render(./index.ejs,{sendAsWhatName:sendWhatDataValue})---within the 'get'
 * ie
 * app.render(./index.ejs,{userName:userName})-->means send data by assigning userName as say "suhail" which is stored in userName variable of js
 *
 * 
 */


//to get the file as it is
app.get('/openTemplateHTMLFile',(req,res)=>{
    const filePath = path.resolve('expressCont/esTemplateEngine/views/index.html');
    res.sendFile(filePath)

})

//using EJS
app.get('/openTemplateEJSFile',(req,res)=>{//http://localhost:3000/openTemplateEJSFile
    const filePath = path.resolve('expressCont/esTemplateEngine/views/index.ejs');
    const nameToSend="sharieff"
    res.render(filePath,{userName:nameToSend,arr:['suhail','sharieff','asif','aslam']})
})

app.listen(port,()=>{
    console.log("server running at "+`${port}`);
})