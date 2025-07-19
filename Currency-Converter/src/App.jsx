import { useState } from 'react' ;
import {useCurrencyInfo} from './hooks/useCurrencyInfo.js' ;
import InfoCard from './components/InfoCard.jsx' ;

import './App.css'

function App() {
  let [from, setFrom] = useState("pkr") ;
  let [to,setTo] = useState("usd") ;
  let [amount, setAmount] = useState(0);
  let [ConvertedAmount, setConvertedAmount] = useState(0) ;

  let currencyRates = useCurrencyInfo(from) ; // this will give me rates for pkr.

  return (
    <>
      <InfoCard label={"from"} amount={amount} ConvertedAmount={ConvertedAmount}/>
    </>
  )
}

export default App
