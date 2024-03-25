//old method

function sumOld(a,b) {
    return a+b
}

var ansOld=sumOld(2,3)
console.log(ansOld);




//new method
const ansNew=(a,b)=>{
    return a+b
}
console.log(ansNew(4,5));





//squaring +ve numbers
const  numArr=[4,-5,6,-7]

const squaredList=(arr)=>{
    const squaredInteger=arr.filter((n)=>Number.isInteger(n)&n>0).map(x=>x*x);
    return squaredInteger;
}
const ans=squaredList(numArr)
console.log(ans);




//param
//first we convert sumArr to function and then put anohter function into it
const sumArr=(function () {
    return function sum(...args) {
        return args.reduce((a,b)=>a+b,0)
    }
})()
console.log(sumArr(1,3,4,56));



const arr1=["jan","feb","mar"]
let arr2;
(function () {
    arr2=arr1;
    arr1[0]="suhail"
})()
console.log(arr2);//return 1st elemt as suhail


//spread operator
const arr3=["jan","feb","mar"]
let arr4;
(function(){
    arr4=[...arr3]
    arr3[0]="suhail"
})();
console.log(arr3);