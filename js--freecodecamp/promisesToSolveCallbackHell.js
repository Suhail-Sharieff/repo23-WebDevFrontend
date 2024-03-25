//promises was introduces to solve call back hell

//syntax:
/*
let p=new Promise((resolve,reject)=>{
    ..........
})
*/

//promise has 3 stages:
/*
1.pending
2.fulfill
3.reject

*/

let p = new Promise((resolve, reject) => {
    // resolve("this means this is suceesfully executed")


})





//function(API) that returns promises:
function returnPromise(param1, param2) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log(param1);
            //once we habe logged param1,we end the promise by putting some message
            resolve("message")
            //if param2 exists
            if (param2) {
                param2();
            }

        }, 3000);
    })
}

returnPromise(2333)