import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (number) str += '0123456789';
    if (symbol) str += '!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }

    setPassword(pass);
  }, [length, number, symbol]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPasswordToClipboard = () => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 100);
    navigator.clipboard.writeText(passwordRef.current.value);
  };

  return (
    <>
      <div>
        <input type="text" value={password} ref={passwordRef} readOnly />
        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      <div>
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label>Length: {length}</label>

        <input
          type="checkbox"
          checked={number}
          id="NumberBox"
          onChange={(e) => setNumber(e.target.checked)}
        />
        <label htmlFor="NumberBox">Numbers</label>

        <input
          type="checkbox"
          checked={symbol}
          id="SymbolBox"
          onChange={(e) => setSymbol(e.target.checked)}
        />
        <label htmlFor="SymbolBox">Symbols</label>
      </div>
    </>
  );
}

export default App;

