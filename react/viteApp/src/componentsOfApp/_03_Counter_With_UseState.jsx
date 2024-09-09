import { useState } from "react"


function CounterWithUseState() {


    //let [theValueWeWannaUpdataEveryTime,functionToChangeIt(given by bable)]=useState(default value)
    let [useValue, setValue] = useState(0)




    function increase() {
        setValue(useValue + 1)
    }
    function decrease() {
        setValue(useValue - 1)
    }

    /**IMPORTANT INTERVIEW Q
     
    Suppose ur increase func was like this:

    function increase(){
        setValue(useValue+1);
        setValue(useValue+1);
        setValue(useValue+1);
    }

    QUESTION: Will it print (suppose useValue was initailly set to 0) "3" on clicking increase btn or "1"

    ANSWER: It will print "1". The reason is bable(compiler of React Lib) will treat those 3 lines as a single line and sends it as a whole package

    So to print 3 on single go, the function is modified like this:

    function increase(){
        setValue((prev)=>prev+1)
        setValue((prev)=>prev+1)
        setValue((prev)=>prev+1)
    }

    ie pass the prev reference and then increment it

    Detailed explaination of why does first syntax only updates the count once:
Initial State: Assume count is initially 69.
First Call: setCount(count + 1) schedules a state update to set count to 70 (69 + 1).
Second Call: setCount(count + 1) schedules another state update to set count to 70 (69 + 1), because count is still 69 in this scope.
Third Call: setCount(count + 1) schedules yet another state update to set count to 70 (69 + 1), again because count is still 69 in this scope.

In case of functional updater syntax React ensures that changes are made to the latest state of the count hence each function gets access to the latest state of the count variable:
First Call: setCount(count =>count+1) schedules a state update to set count to 70
Second Call : schedules a state update to set count to (70+1) because count is now 70 in this scope and so on...
      
      
     */


    return (
        <>
            <div className="bg-blue-400 text-black flex justify-evenly align-middle">
                <div id="counter" className="bg-green-400"><h1>{useValue}</h1> </div>
                <button id="increase" className="bg-pink-500 " onClick={increase}>Increase {useValue}</button>
                <button id="decrease" className="bg-pink-500 " onClick={decrease}>Decrease {useValue}</button>
            </div>
        </>
    )

}
export default CounterWithUseState