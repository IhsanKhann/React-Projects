import { useState,useEffect } from "react";

function useCurrencyInfo(currency){ 
    let [data,setData] = useState({}) ;
    
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json` ;
        fetch(url)
        .then((res)=>res.json())
        .then((UseFulData)=> setData(UseFulData[currency])) ;
      
    // this will return all the return rates for the currency we want.
    },[currency])

    return data ; 
}   

export default useCurrencyInfo ;
// Hooks are mostly pure javascript functions, so I gave this a js format and not jsx.