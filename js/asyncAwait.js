//IMP

//supppose u need say 3s time to load data and u dont want to run below code say processing fetchd data bfr loading it. So u can use calll back method as:
/*
function load() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //lets send say 900
            resolve(900);
        }, 3000);
    })
}


console.log("loading data..");
let value=load();
value.then((x)=>{
    console.log("processing data");
    console.log("done..");
})
*/




//better way is async function
async function load() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //lets send say 900
            resolve(900);
        }, 3000);
    })
}

async function main() {
    console.log("loading data..");
    let value = await load();

    console.log("processing data");
    console.log("done..");
}
main()