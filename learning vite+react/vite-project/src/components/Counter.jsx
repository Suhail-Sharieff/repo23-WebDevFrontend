import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

function Counter() {
    //example for hooks 
    const [curr, setCurr] = useState(0);//jaha jahan par curr dikhraha har bar onclick update kardo
    //if we use normal JS like "let a=0", it would increse curr value,but never display the changes after clciking


    //for useref()---avoids complete rendering(rerun full upon a single channge)
    let a = useRef(0)

    const increaseCurr = () => {
        setCurr(curr + 1);
        { a.current = a.current + 1 }
        //useref()---whenever a useRef is chenged,NO RERENDERING HAPPENS unlike useState()
        console.log("value of a is :"+a.current);//if not put .current,it prints as "OBJECT"
    };


    //use effect uses:---->whenver curr changes entire application runs {this can be avoided using useref()}
    // this is a typical syntax ,use useEffect snppet u wil understand

    useEffect(() => {//this means any change in "curr" would theow an alert of "cont was chenged"
        alert("the count was changed")
    }, [curr])
    //suppose i want alert("welcome") on reload ie on no change,then leave that array empty
    useEffect(() => {
        alert("welcome user")
    }, [])
    //BUT BUT this all would happen two times each on first time coz of <RestrictMode> being on in main.jsx ,if u remove that,it would appear once





    return (
        <div className='flex justify-center py-4'>
            <div className="inline-flex">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={increaseCurr}>
                    Increase
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    {/* using useState */}
                    {curr}

                    {/* {using useref()} */}

                </button>
            </div>
        </div>
    );
}

export default Counter;
