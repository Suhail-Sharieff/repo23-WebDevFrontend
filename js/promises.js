//promises syntax  \
//its jsut like try catch in java                    '
console.log("after 3 sec");
let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
   if (a<0.5) {
    //if true then send "suhail" to value o x in "then"
     setTimeout(() => {
         console.log("yes imaa done");
         resolve("suhail")
     }, 3000);
   }
   else{
    //else send the quote wthin reject to "catch"
    reject("unexpected error ocuured")
   }
})


prom1.then((x)=>{
    console.log(x);
}).catch((e)=>{
    console.log(e);
})



// refers cwh espicially API




