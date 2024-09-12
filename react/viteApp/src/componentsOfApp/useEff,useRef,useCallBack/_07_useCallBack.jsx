/*
import { useState } from "react"

export function PasswordGen() {
    const [currText, setText] = useState("")

    function changed(text) {
        text = document.getElementById("text").value
        setText(text)
        console.log(currText);

    }

    function generateRandomString() {
        let L = parseInt(document.getElementById("text").value)
        if (L == 0) {
            document.getElementById("random").innerHTML = "No number entered"
        }
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < L; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        document.getElementById("random").innerHTML = result

    }


    return (
        <>
<div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
    <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
            Enter the length of password you want:
        </label>
        <input 
            id="text" 
            type="number" 
            className="border-2 border-blue-500 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
            onInput={() => changed(currText)} 
            value={currText} 
            max={15} min={4}
        />
    </div>
    <div id="random" className="text-gray-700 text-sm overflow-auto"></div>
    <div>
        <button 
            onClick={generateRandomString} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            Get Secret Key
        </button>
    </div>
</div>

        </>

    )
}
*/

import { useCallback, useState } from "react"




export function UseCallBack() {


    const [len, setLen] = useState(5)
    const [hasNumbers, setHasNumbers] = useState(false)
    const [hasSpecialChar, setHasSpecialChar] = useState(false)
    const [password, setPassword] = useState("USE CALL BACK PASSWORD")

    function changeNumberState(currState) {
        setHasNumbers(!currState)
        if (hasNumbers) {
            console.log("Has nums");
        } else {
            console.log("Doent have nums");
        }

    }
    function changeCharState(currState) {
        setHasSpecialChar(!currState)
        if (hasSpecialChar) {
            console.log("Has chars");
        } else {
            console.log("Doent have chars");
        }

    }

    //USE CALL BACK:
    //since our password would depend upon 3 dependencies ie length,hasNum & hasChar, whenever any one of them gets updated, we have to generate a new password, here comes the use of useCallBack(fn,dependecies(inFormOfArray))
    const passwordFunc = useCallback(
        () => {

            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let pass = ""

            if (hasNumbers) characters += "0123456789"
            if (hasSpecialChar) characters += "!@#$%&"


            for (let i = 0; i < len; i++) {
                let rand = Math.floor(Math.random() * characters.length)
                pass += characters.at(rand)
            }

            setPassword(pass)

        },

        [len, hasNumbers, hasSpecialChar, setPassword]//dependecies...dont forget to pass even setPassword
    )




    return (
        <>

            <div id="passsword" className="flex justify-center bg-black text-white">
                {password}
            </div>

            <div className="flex  justify-center py-6 space-x-6 bg-green-300">
                <div id="slider" className="space-x-3">
                    <input
                        type="range" min={6} max={20} value={len}
                        //IMP
                        onChange={(e) => (setLen(e.target.value))}
                    />
                    <label>Length:{len}</label>
                </div>
                <div id="numSelect">
                    Numbers
                    <input type="checkbox" name="numbers" id="numbers" onClick={() => changeNumberState(hasNumbers)} />
                </div>
                <div id="charSelect">
                    Characters
                    <input type="checkbox" name="numbers" id="numbers" onClick={() => changeCharState(hasSpecialChar)} />
                </div>
                <div>
                <button
                onClick={passwordFunc}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 flex justify-center"
            >
                Get Secret Key
            </button>
                </div>
            </div>
            


        </>
    )
} 