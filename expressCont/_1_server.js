/**
 * 
 * npm install -g nodemon
 * npm init -y 
 * npm i express
 * nodemon main.js
 * 
 * 
 * 
 *
 * nodemon main.js
 * 
 * 
 */


//using NORMAL JS

// // Importing the http module 
// import http from "http"

// // Creating server 
// const server = http.createServer((req, res) => { 
// 	// Sending the response 
// 	res.write("This is the response from the server") 
// 	res.end(); 
// }) 

// // Server listening to port 3000 
// server.listen((3000), () => { 
// 	console.log(`Server is Running `); 
// })




// USING EXPRESS

import express from "express"
const app=express()
const port=3000

app.get('/welcome',(req,res)=>{
	res.send("Hello Suhail Sharieff")
})
app.get('/contact',(req,res)=>{
	res.send("this is contatct")
})
app.get('/about',(req,res)=>{
	res.send("this is about")
})
app.listen(port,()=>{
	console.log(`Listening on port number ${port}`);
})
