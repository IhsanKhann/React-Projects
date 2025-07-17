import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx';

function App() {
  return (
    <>
      <div className='container flex flex-col gap-8'>
        <h1 className='text-4xl font-bold'>Hello React + Tailwind</h1>
        <div className='cards-parent flex flex-row gap-4'>
          <Card title="React" subtitle="A JavaScript library" description="React helps build interactive UIs." BtnText="Click Me" BtnColor="red"/>
          <Card title="Vue" subtitle="Progressive framework" description="Vue is approachable and versatile." BtnText="Visit Me" BtnColor="green" />
          <Card title="Angular" subtitle="Full-featured framework" description="Angular is powerful for large apps." BtnText="SignUp" BtnColor="yellow"/>
          <Card title="Svelte" subtitle="Compiler-based framework" description="Svelte compiles to highly efficient code." BtnText="Login" BtnColor="black"/>
        </div>
      </div>
    </>
  )
}

export default App;
