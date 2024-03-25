// for loop
/*
for (let i = 0; i < 100; i++) {
    console.log(i);
    
}*/


// forin loop is used for objects
/*
let obj={
    name:"suhail",
    roll:45,
    marks:99
}
for (const key in obj) {
    
        const element = obj[key];
        // console.log(key);
        // console.log(element);
        console.log(key,element);
        
    
}
*/


//for of loop is used for array etc
/*
for (const k of "suhail") {
    console.log(k);
    //prints each char in suhail
}
*/




let a=[45,213,56]
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
    
// }





a.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})




//for of loop
let obj={
a:1,b:2,c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}



//for of looop
for (const x of a) {
    console.log(x);
} 