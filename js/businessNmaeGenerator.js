//her w r geenrting a busines name by using suiable adjectives
// like crazy,amazing, fire
//shop name like engine,foods,garments
//another word like bros,limited,hub





console.log("your name is as follows:");

let ra=Math.random();
let first,second,third;

//first
if(ra<0.3){
    first="carzy";
}else if(ra>0.33&&ra<0.66){
    first="amazing"

}else{
    first="fire";
}



//second
ra=Math.random();
if(ra<0.3){
    second="engine";
}else if(ra>0.33&&ra<0.66){
    second="foodsz"

}else{
    second="garments";
}


//third
ra=Math.random();
if(ra<0.3){
    third="bros";
}else if(ra>0.33&&ra<0.66){
    third="limited"

}else{
    third="hub";
}

console.log(first+second+third);