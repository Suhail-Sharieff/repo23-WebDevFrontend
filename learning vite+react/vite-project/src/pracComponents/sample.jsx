import { useState } from "react";

export function Sample() {
    const [cnt,setCnt]=useState("")
    const val=document.getElementById("text")
    return (
        <>
            Type here
            <input type="text" id="text" onChange={()=>setCnt(val.innerHTML())}/>
            <div id="cnt">{cnt}</div>
        </>
    );
}
