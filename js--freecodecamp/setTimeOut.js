// imp

//synchronous means the code is executed from start to end and the next line is not excuted until the previoous code is executed

//asynchronous means vice versa

//settIMEoUT
//hacking terminal
function Initializing() {
    console.log("Initializing.....");
}
function Retrieving() {
    console.log("Retrieving data....");
}
function Hacking() {
    console.log("Hacking In process.....");
}
function Success() {
    console.log("Hacked Successfully....");
}

setTimeout(() => {
    Initializing()
}, 2000);
setTimeout(() => {
    Retrieving()
}, 4000);
setTimeout(() => {
    Hacking()
}, 6000);
setTimeout(() => {
    Success()
}, 8000);
//this is executed while waiting:
console.log("this is executed while waiting asynchronously");



