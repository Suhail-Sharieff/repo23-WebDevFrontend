//when call back funtions are nested one within the other
//this is also called as pyramid of doom
//it becomes difficult to understand


function getData(id) {
    console.log("data: ",id);
}


//lets say first we need data1,then data2,then data3
//then one approach may be:
/*setTimeout(() => {
    getData(90)
}, 2000);
setTimeout(() => {
    getData(900)
}, 4000);
setTimeout(() => {
    getData(9000)
}, 6000);*/



//using call back hell
function getData2(id,getAnotherData) {
   setTimeout(() => {
    console.log("data2: ",id);
    //if getAnotherData exists--imp to write
    if (getAnotherData) {
        getAnotherData()
    }
   }, 2000);
}
getData2(23,()=>{
    getData2(34,()=>{
        getData2(45)
    })
})



// hacking using callBackhEll
function hack(string,func) {
    setTimeout(() => {
        console.log(string);
        if (func) {
            func()
        }
    }, 2000);
}

hack("hacking Initaiated......",()=>{
    hack("getting files......",()=>{
        hack("corrrupting user......",()=>{
            hack("hack complete......")
        })
    })
})

