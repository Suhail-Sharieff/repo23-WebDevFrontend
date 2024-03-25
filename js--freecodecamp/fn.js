function sum(a,b,c){
    console.log("this is a function");
    return (a+b+c)

}



console.log(sum(2,3,4));



var globalVar=23;
console.log(globalVar);

function funcx() {
    let x=45;
    if (x!=undefined) {
        console.log("this is not undefined");

    }else{
        console.log("this is undefined");
    }

    return typeof(x)
}
funcx()
console.log(funcx());

// console.log(x);//throws error since its not a globla var


// array to a String
let a=[1,2,3,4,5,6,7]
console.log(JSON.stringify(a));



//3=="3" true
//3==="3" false
console.log(3==="3");
console.log(3=="3");




"abc".toLocaleLowerCase()

//vowel 
function fun(s){
    var c=0;
  for(const char of s){
    
    if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u') {
        c++;
    }
  }
  return c;
}
var ans=fun("suhail")
console.log(ans);


const fu=(s)=>{
    var c=0;
    for(const char in s){
        if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u') {
            c++;
        }
    }
    return c;
}
var ans2=fun("suhailsharieff")
console.log(ans2);




//for each in loops
// arr.forEach(callback fun) 
//callback funr=tuion is a function which is passed as an argument to another function


let arr=[2,3,4,5,6]
arr.forEach(function  print(val){
console.log(val);
})
//or
arr.forEach((e,pos,completearr)=>{
    console.log(e,pos,completearr);
})
//printing squares
arr.forEach((e)=>{
    console.log(e*e);
})
const calcsq=(e)=>console.log(e*e);
arr.forEach(calcsq)



//map
// arr.map(callbackfn(value,index,array))
//its similar to foreach but it retuns new aarray but foreach no!!
let newarr=arr.map((e)=>{
    // console.log(e);
    return e
})
console.log(newarr);


// /filter
let newarr2=arr.filter((e)=>{
    // return booleanexp
    return e%2==0
})
console.log(newarr2);



// /reduce
// it reduces an entire array into a single number like avg,mean etc
var redAns=arr.reduce((prev,current)=>{
    return prev+current
})
//prev result is updated everytime
console.log(redAns);

//extracting max le
var maxele=arr.reduce((prev,curr)=>{
    return prev>curr?prev:curr

})
console.log(maxele);






//scored more than 90
let q=[99,34,55,66,98,100]
let morethn90=q.filter((e)=>{
    return e>90
})
console.log(morethn90);