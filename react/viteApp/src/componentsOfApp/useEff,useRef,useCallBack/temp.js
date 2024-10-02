async function get(from,to) {
    let raw=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
    let json =await raw.json()

    
    console.log(json[from][to]);
}


get(`usd`,`inr`)