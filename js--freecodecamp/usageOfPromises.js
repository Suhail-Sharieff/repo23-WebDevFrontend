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

//multiple promises, ex: judge0 runs multiple cases:
let arr=[
    new Promise((res,rej)=>{setTimeout(()=>{console.log('Prom1 exec');res()},1000)}).then(()=>console.log('Prom1 done')),
    new Promise((res,rej)=>{setTimeout(()=>{console.log('Prom2 exec');rej()},2000)}).then(()=>console.log('Prom2 done')).catch((err)=>console.log('Prom2 failed')),
    new Promise((res,rej)=>{setTimeout(()=>{console.log('Prom3 exec');res()},3000)}).then(()=>console.log('Prom3 done')),
]


const exec=async()=>{
    await Promise.all(arr)
}


exec()
