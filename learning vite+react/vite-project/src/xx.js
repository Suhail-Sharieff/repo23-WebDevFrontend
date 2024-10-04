class Car{
    constructor(arr){
        this.brand=arr
        arr.map((x,y)=>{
            console.log(x,y);
        })
    }
}



const arr=["suhaul ","sharieff"]

const pas=new Car(arr)
// arr.map((x,y,z)=>{
//     console.log("elemnt",x,y,z);
// })