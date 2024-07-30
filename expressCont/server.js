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




// Importing the http module 
import http from "http"

// Creating server 
const server = http.createServer((req, res) => { 
	// Sending the response 
	res.write("This is the response from the server") 
	res.end(); 
}) 

// Server listening to port 3000 
server.listen((3000), () => { 
	console.log("Server is Running"); 
})
