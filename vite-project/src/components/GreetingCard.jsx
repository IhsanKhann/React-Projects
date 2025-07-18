import React from 'react' ;
import './GreetingCard.css' ;

function GreetingCard(props) {
  return (
    <div className='greeting-card'>
      <h2> {props.name} </h2>
      <h4> {props.age}</h4>
      <p> {props.greeting} </p>
    </div>
  )
}

export default GreetingCard
