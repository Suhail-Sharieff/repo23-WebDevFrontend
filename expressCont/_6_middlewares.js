//these r just like inerceptos in spring boot,they r used to perform some action before sendingg the req and even after sending request

//example i want to print on console "before" before requesting the "/openHome" page,the print "after"

//steps followed: log("before")-->grant me to open /openHome page and display whatever stuff is there in /openHome page-->log("after")


//example u want to check if the user is safe before i hit /openHome page,if safe i grant me to use /openHomePage, then print done like that...


//i will create a function(middleware) called "check()" to check if user is not a hacker, then if user is safe i allow home to use website and make further req,if not ill print not safe and return 


import express from "express"

const app=express()
const port=3000

//middle ware function to use befr req,place it on top
app.use(middleWareCheck)

app.get("/homePage",(req,res)=>{//http://localhost:3000/homePage
    console.log("home page opened");
    res.send("Welcome to home page")
})
function middleWareCheck(req,res,proceedFurther){
    //code to check is user is not hacker
    // if(user.isSafe){log()} //like that
    console.log("----------------");
    console.log("User is not hacker, i checked");
    proceedFurther()
    console.log("User is granted to use website");
    console.log("----------------");//

}

app.listen(port,()=>{
    console.log("Running middleware.js on "+`${port}`);
})


//OUTPUT:
//for every refresh on the above page:
/*
 Running middleware.js on 3000
----------------
User is not hacker, i checked
home page opened
User is granted to use website
----------------
 */
//is printed