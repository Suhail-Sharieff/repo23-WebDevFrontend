import React, { useState } from 'react';

function Counter() {
    //example for hooks 
    const [curr, setCurr] = useState(0);//jaha jahan par curr dikhraha har bar onclick update kardo
    //if we use normal JS like "let a=0", it would increse curr value,but never display the changes after clciking

    const increaseCurr = () => {
        setCurr(curr + 1);
    };

    return (
        <div className='flex justify-center py-4'>
            <div className="inline-flex">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={increaseCurr}>
                    Increase
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    {curr}
                </button>
            </div>
        </div>
    );
}

export default Counter;
