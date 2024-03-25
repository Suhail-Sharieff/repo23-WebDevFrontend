var obj={
    name:"suhail",
    class:"Btech",
    college:"UVCE",
    cgpa:10,
    salary:"1 Cr"
}


console.log(obj);
console.log(obj.salary);


// /adding new prop toobj
obj.voice="sweet"


console.log(obj);



//to dedelte An elemt from obj'
delete obj.voice
console.log(obj);


//to check if that obj has some property or not
console.log(obj.hasOwnProperty(salary));