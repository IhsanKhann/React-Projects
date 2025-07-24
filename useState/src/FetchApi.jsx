import { useEffect, useState } from "react";

function FetchingData(){
    let [data,setData] = useState(null)
    let [loading,setLoading] = useState(true) ;

    // useEffect(()=>{
    //     let url = 'https://dummyjson.com/products' ;
    //     fetch(url) 
    //     .then((response)=> response.json())
    //     .then((json)=> setData(json))
    // },[]) 

    // return( 
    //     <>
    //         <h2> Name:{data.products[0].description}</h2>
    //         <h3> Price:{data.products[0].price}</h3>
    //     </>
    // )

    // the fault with this code is the data we are fetching before the promise is resolved.

    useEffect(()=>{

        let url = 'https://dummyjson.com/products' ;
        fetch(url)
        .then((response) => { 
            response.json() ;
            setLoading(false)
        })
        .then((json) => {
            setData(json);
            setLoading(false)
        })
        .catch((error) => {
        console.log(error)
    })

    },[])

    return(
       <>
          {loading ? ( 
                <h2>Loading...</h2>
            ) : data && data.products ? (
                <>
                    <h2>Title: {data.products[0].title}</h2>
                    <h3>Description: {data.products[0].description}</h3>
                    <h4>Price: ${data.products[0].price}</h4>
                </>
            ) : (
                <h2>Data can't be loaded</h2>
            )}
       </>
    )
}

export default FetchingData;