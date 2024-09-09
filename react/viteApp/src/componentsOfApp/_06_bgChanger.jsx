import { useState } from "react";

export function BgChanger() {
    const [currColor, setColor] = useState("white");

    function changeColor(newColor) {
        setColor(newColor);
    }

    return (
        <>
        {/* //OBSERVE HOW THIS DIV RECIEVES PROPS */}
            <div id="bg" style={{ backgroundColor: currColor, height: "30vh" }} className="border-4 border-black ">
                Select any color to change from below buttons
            </div>
            <div className="bg-black text-yellow-300 flex justify-around">
                {/* //MISTAKE:
                <button className="blue" onClick={changeColor("blue")}>Blue</button>

                ie u cant directly pass the value to function, use {()=>changeColor("---")}...coz onclick expects a complete function to be passsed and not any retur value:
                onClick={changeColor}---->passing func 
                onClick={changeColor("---")}---->passing return of changeColor, which is nothing, so error 
                */}
                <button className="blue border-2 border-green-400 rounded" onClick={() => changeColor("blue")}>Blue</button>
                <button className="red border-2 border-green-400 rounded" onClick={() => changeColor("red")}>Red</button>
                <button className="green border-2 border-green-400 rounded" onClick={() => changeColor("green")}>Green</button>
                <button className="pink border-2 border-green-400 rounded" onClick={() => changeColor("pink")}>Pink</button>
            </div>
        </>
    );
}
