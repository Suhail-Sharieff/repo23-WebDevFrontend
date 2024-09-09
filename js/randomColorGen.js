console.log("lets randomly assign the color to these boxes");


let boxes=document.getElementsByClassName("box");
// let boxes=document.querySelector(".conatainer").children

function genRandomColor() {
    //255 is the max opacity a color can have
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

//crating an array from boxes and assigneg random value so generated 
Array.from(boxes).forEach(e=>{
e.style.backgroundColor=genRandomColor();
  
})

