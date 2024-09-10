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