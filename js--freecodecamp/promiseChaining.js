/*function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1 is returned");
            resolve("message of succes")
        }, 3000);
    })
}
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2 is returned");
            resolve("message of succes")
        }, 3000);
    })
}

//chaining one then within another so that data1 is retrieved then data2
let p1 = asyncFunction1()
p1.then((result) => {
    //result is resolved message
    console.log("result: ", result);
    let p2 = asyncFunction2()
    p2.then((result) => {
        //result is resolved message
        console.log("result: ", result);
    })
})


*/


//hacking terminal using promiseChaining'
function hack(string){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(string);
            resolve()
        }, 3000);
    })
}
//this is easy to understand than call-back hell
hack("hacking Initialized.....").then(()=>{
    hack("getting all files.....").then(()=>{
        hack("corrupting all files.....").then(()=>{
            hack("task complete....").then(()=>{
                console.log("your computer is mine now 👹");
            })
        })
    })
})