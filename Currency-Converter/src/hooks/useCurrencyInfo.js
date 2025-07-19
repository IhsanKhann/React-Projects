import { useState } from "react";

async function useCurrencyInfo(currency){ 
    let [data,setData] = useState({}) ;
    
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json` ;

    let res = await fetch(url);
    setData(await res.json()) ; 

    return data ; 
    // this will return all the return rates for the currency we want.
}   

export default useCurrencyInfo ;
// Hooks are mostly pure javascript functions, so I gave this a js format and not jsx.