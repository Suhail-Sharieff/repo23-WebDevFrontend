async function h() {
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(900);
    }, (Math.ceil(1000+Math.random()*6000)));
   })
}


async function a() {
    console.log("Initializing hacking.....");
    let x1=await h();
    console.log("Reading your files.....");
    let x2=await h();
    console.log("Password files detected.....");
    let x3=await h();
    console.log("Sending all files to server.....");
    let x4=await h();
    console.log("Cleaning Up.....");
    
    
}
a()





