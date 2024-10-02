import { useCallback, useEffect, useState } from "react";

export function CurrencyConvert() {

    const [from, setFrom] = useState("")
    const [countrArr, setCountrArr] = useState([])
    const [ans,setAns]=useState(0)
    const [fromType,setFromType]=useState("USD")
    const [toType,setToType]=useState("INR")



   
    function swapCurrency() {
        setFromType(toType)
        setToType(fromType)
        
    }
    const getCountries=useCallback(async ()=>{
        let raw = await fetch('https://restcountries.com/v3.1/all?fields=currencies');
        let json = await raw.json();
        const currencies = [];

        for (const element of json) {
            if (element.currencies) {
                for (const key in element.currencies) {
                    currencies.push(key);
                }
            }
        }
        setCountrArr(currencies);
    },[])

    const convert=useCallback(async()=>{
        let raw=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromType.toLowerCase()}.json`)
        // let raw=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json`)
        let Json =await raw.json()

        console.log("from "+fromType+" to "+toType);
    
        // console.log(Json[fromType.toLowerCase()][toType.toLowerCase()]);

        setAns(Json[fromType.toLowerCase()][toType.toLowerCase()]*from)

    })
    useEffect(() => {
        getCountries();
    }, [getCountries]);

    const handleFromSelect=(e)=>{
        // console.log(e.target.value);
        setFromType(e.target.value)
    }
    const handleToSelect=(e)=>{
        // console.log(e.target.value);
        setToType(e.target.value);
    }

    useEffect(()=>{//to eleiminate calcultae button
        convert();
    },[fromType,toType,convert])

    


    return (
        <div className="flex justify-center items-center  bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-xl font-semibold text-center mb-4">Currency Converter</h2>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                        <input
                            type="number"
                            name="from"
                            id="from"
                            placeholder={fromType}
                            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min={0}
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        />
                        From:
                        <select name="selectTo" id="selectTo" onChange={handleFromSelect} >
                            <option>{fromType}</option>
                            {countrArr.map((e, idx) => (
                                <option key={idx} value={e} >{e}</option>
                            ))}
                        </select>
                        To:
                        <select name="selectTo" id="selectTo" onChange={handleToSelect}>
                            <option >{toType}</option>
                            {countrArr.map((e, idx) => (
                                <option key={idx} value={e}>{e}</option>
                            ))}
                        </select>
                    </div>
                    
                    <button className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200" onClick={swapCurrency}>
                        Swap Currency
                    </button>
                    <div className="flex items-center justify-between">
                        
                    </div>
                    {/* <button className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200" onClick={convert}>
                        Calculate
                    </button> */}{/**used useEffect instad of calculate function */}
                    <div className="ans">
                        {from+" "+fromType+" = "+ans+" "+toType} 
                    </div>
                </div>
            </div>
        </div>
    );
}
