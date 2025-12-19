function add(a){
  return function(b){
    return function(c){
      console.log(a+b+c);
    }
  }
}

// or
const add=(a)=>(b)=>(c)=>a+b+c //returns a+b+c


//this func willnt execute unill all 3 params are passed
add(2)(3)(4)
