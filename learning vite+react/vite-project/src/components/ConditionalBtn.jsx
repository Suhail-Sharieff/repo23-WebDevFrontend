import React from 'react'
import { useState } from 'react'

function ConditionalBtn() {
    const [showStatus, setshowStatus] = useState(false)
    const WhenHidden = () => {
        return (
            <>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Something hiding here
                </button>

            </>
        )
    }
    const WhenNotHidden=()=>{
        return (
            <>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Hurrah u found me
                </button>
            </>
        )
    }
    return (
        <div className='flex justify-center py-4'>
            <div className="inline-flex">
                {showStatus ? <WhenNotHidden/>: <WhenHidden/>}
                <button onClick={() => setshowStatus(!showStatus)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Click to show/hide
                </button>
            </div>
        </div>
    )
}

export default ConditionalBtn
