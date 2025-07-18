 // import Card from './Card.jsx' ;
import {Card, GreetingCard } from './components/Card.jsx' ;
// multiple imports from a single file..
import { useState } from "react";
import List from './RenderList.jsx' ;

function App(){
    let [state, setState] = useState(false) ; 
    // you can put anything in the useState() ; in terms of dataTypes
    let [counter,setCounter] = useState(0) ;
    
    function Increase_Counter () {
        setCounter((prev) => prev + 1) ;
    }

    // use the setter to change the state of the variable => this is a dynamic variable
    // the setter is basically a function => setter(argument) or setter( (parameter) => code ) ;
    // inside the setter there is a previous parameter to get the old value.

    function Decrease_Counter() {
        setCounter((prev) => prev - 1) ;
    }


    // onClick = "{funtion/arrow function}" ;
    // onClick => inside the function we change the values of the state() using our setState function.
    
     return(
        <>
            <Card isLogged = {true} /> 
            {/* <Card isLogged= {false}/>  */}

          <button onClick={() => setState(true) }>Click me </button> 
            <button onClick={()=>setState(false)}> Login </button>
            <GreetingCard state={state}/>
            
            {/*Render Lists: */}
            <div>
                <List />
                {/* List being successfully used */}
            </div>

            <button onClick={Increase_Counter}> 
            Count {counter} </button>
            <button onClick={Decrease_Counter}> 
            Count {counter} </button>
        </>
    ) ;    
}

export default App ;