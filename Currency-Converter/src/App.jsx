import { useEffect, useState } from 'react';
import useCurrencyInfo from './hooks/CurrencyInfo.js';
import InfoCard from './components/InfoCard.jsx';

import './App.css';

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyRates = useCurrencyInfo(from); // fetches rates based on 'from' currency

  useEffect(() => {
    if (currencyRates && currencyRates[to]) {
      const result = currencyRates[to] * amount;
      setConvertedAmount(result);
    }
  }, [amount, to, currencyRates]);

  return (
    <>
      <InfoCard
        label="from"
        amount={amount}
        setAmount={setAmount}
        currency={from}
        setCurrency={setFrom}
        options={Object.keys(currencyRates)}
      />

      <InfoCard
        label="to"
        finalAmount={convertedAmount}
        SelectedCurrency={to}
        setSelectedCurrency={setTo}
        options={Object.keys(currencyRates)}
      />
    </>
  );
}

export default App;
