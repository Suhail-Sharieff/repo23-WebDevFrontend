//use .then() or .catch()


//promise.then((res)=>{..})
//promise.catch((err)=>{..})


const promResol=()=>{
    return new Promise((resolve,reject)=>{
        console.log("imma promise");
        resolve("done")
    })
}
//p stores promise
let p1=promResol()
//agar p resolve ho jaye
p.then(()=>{
    console.log("promise fulfilled");
})



const promReject=()=>{
    return new Promise((resolve,reject)=>{
        console.log("imma promise");
        reject("undone")
    })
}
//p stores promise
let p2=promReject()
//agar p resolve ho jaye
p.catch(()=>{
    console.log("promise not fulfilled");
})
