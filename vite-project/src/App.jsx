// App.jsx
import { useState } from 'react';
// import React from 'react'; 
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Card from "./components/Card";
import GreetingCard from './components/GreetingCard';

function App() {
  const [count, setCount] = useState(10);
  const name = "Ihsan";
  const age = 19;

  const greetings = [
    "Welcome to the site!",
    "Hope you have a great day!",
    "Enjoy your stay!",
    "Thanks for visiting!"
  ];

  return (
    <>
      <div className='main'>
        <Navbar />
        <h2>Hello world {name}</h2>
        <p>My age is {age}</p>

        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add Count {count}</button>
        <button onClick={() => {
          if (count > 0) setCount(count - 1)
        }
        }>Remove Count {count}</button>

        <div className='cards'>
          <Card title="Card 1" description="This is the description for card one." />
          <Card title="Card 2" description="Here is some more info about card two." />
          <Card title="Card 3" description="Details and content for the third card." />
          <Card title="Card 4" description="Additional description for the fourth card." />
          <Card title="123" />

          <GreetingCard name={name} age={age} greeting={greetings[0]} />
          <GreetingCard name={name} age={age} greeting={greetings[1]} />

        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
