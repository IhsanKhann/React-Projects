import { useEffect, useState } from "react";

function Cart(){
    // let quantity = 1;
    // let setQuantity = () =>{
    //     quantity += 1
    // } 
    
    let [quantity, setQuantity] = useState(0);
    let totalPrice = quantity*100 ;

    // let [totalPrice,setTotal] = useState(0) ;

    // useEffect(()=>{
    //     setTotal(quantity*100)
    // },[quantity])
    
    const handleClick = () => {
        setQuantity(quantity+1) ;
    }

    return(
        <>
            <button onClick={handleClick}> 
                TotalPrice: {totalPrice} 
            </button>
        </>
    )
}

export default Cart ;