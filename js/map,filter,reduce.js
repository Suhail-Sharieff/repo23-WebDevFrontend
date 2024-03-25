let arr=[12,342,2345];
//let newArr=[];


/*
//example ehere we push the sqaured elemts of old array into the new one
for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    newArr.push(e**2);
}
console.log(newArr);

*/




//alternative using map
//read it as newArr ke andar map kardo arr ke elemet e ko by returning e pow 2
let newArr=arr.map((e)=>{
    return (e**2);
})
console.log(newArr);



//filter
//newArr me sirf wo elemts ko dedo jo 144 se bade ho
const func=(e)=>{
    if(e>12){return true;}
    return false;
}
console.log(arr.filter(func));//12 is removed






//reduce method to get product of all ements of arr
let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return (a*b);
}
console.log(arr2.reduce(red));





