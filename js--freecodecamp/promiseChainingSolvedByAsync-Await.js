//syntax:
// async function name(params) {
//     // .....
// }



//here we dont need to write "return new Promise((resolve,reject)=>{})".....directly we write:
// async function someFunc(){
//     console.log("no need of any promise syntax");
// }
// someFunc()




//await measn to pause the execution of surronding async function until the promise is settled...it is only used inside the async func

//hacking terminal using async await:
function hack(string) {



    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string);
            resolve()
        }, 3000);



    })

}

//create another async funtion to call hack
async function callHack() {
    await hack("initialised.....")
    await hack("getting data.....")
    await hack("corrupting files.....")
    await hack("ur computer is mine now.....👹")
}
callHack()



