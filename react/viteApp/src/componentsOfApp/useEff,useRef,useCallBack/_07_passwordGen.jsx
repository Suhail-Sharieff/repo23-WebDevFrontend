import { useState } from "react"

export function PasswordGen(){
    const [currText,setText]=useState("")

    function changed(text){
        text=document.getElementById("text").value
        setText(text)
        console.log(currText);
        
    }

    function generateRandomString() {
        let L=parseInt(document.getElementById("text").value)
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < L; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        document.getElementById("random").innerHTML=result
        
    }
    

    return (
        <>
        Enter the length of password u want:
        <input id="text" type="number" className="border-2 border-blue-500" onInput={()=>changed(currText)} value={currText} ></input>

        <div id="random"></div>
        <button onClick={generateRandomString} >Change</button>
        </>
    )
}