import { error } from "console"
import fs from "fs"


//create and write 
//using call back hell->
fs.writeFile("text.txt","this is a txt file",()=>{
    console.log("writing");
    fs.readFile("text.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})

//maintainable code:
fs.appendFile("text.txt"," appended succesfuly",(err,dat)=>{
    console.log(err,dat);
})

//see maintainable code in maintainable.js

