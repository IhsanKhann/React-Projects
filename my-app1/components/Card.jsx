import './Card.css' ;
let StartBtn = <h2> Hello World </h2> ;
let CloseBtn = <h2>Bye World </h2>
    
function Card(props){
    if(props.isLogged === true){
         return( <div> {StartBtn} </div> ) ;
        }
     else{
      return(<div>{CloseBtn} </div>) ;
    } 
}

function GreetingCard(props){ 
        if(props.state === false){
              return <p> Login failed</p> ;
        }
        else if(props.state === true ){
            return <p> Login Success </p> ; 
    }
}

export { Card, GreetingCard };