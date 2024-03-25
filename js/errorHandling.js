let a=prompt("enetr first number")
let b=prompt("enetr second number")
// let sum=a+b
// console.log("the sum is ",sum);
//this just appends a nd b rather than adding them


let sum=parseInt(a)+parseInt(b)
console.log(sum);

//suppose user doesnt enter number atall
if(isNaN(a)||isNaN(b)){
    try {
        console.log();
    } catch (error) {
        
        throw SyntaxError("Enter valid nums only");
    }
}

