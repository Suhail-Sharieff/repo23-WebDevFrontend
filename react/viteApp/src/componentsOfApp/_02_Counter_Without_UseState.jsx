function CounterWithoutUseState(){
    let value=0

    let c=document.getElementById("counter");
    let i=document.getElementById("increase");
    let d=document.getElementById("decrease");

    function increase(){
        value++;
        display()
    }
    function decrease(){
        value--;
        display()
    }

    function display(){
        console.log(value);
        c.innerHTML=`<h1>Counter value : ${value}</h1>`
        i.innerHTML=`<h1>Increase value : ${value}</h1>`
        d.innerHTML=`<h1>Decrease value : ${value}</h1>`
    }

    return (
        <>
        <div className="bg-yellow-400 text-black flex justify-evenly align-middle">
            <div id="counter" className="bg-green-400"><h1>{value}</h1> </div>
            <button id="increase" className="bg-green-500 " onClick={increase}>Increase {value}</button>
            <button id="decrease" className="bg-green-500 " onClick={decrease}>Decrease {value}</button>
        </div>
        </>
    )
}


export default CounterWithoutUseState