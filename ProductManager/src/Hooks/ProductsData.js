import { useEffect,useState } from "react";

function useProductInfo(productName){
    // api use -> api will give me an array with some object.
    // I only will take the data of the Required one.

    let [Allproducts,setAllProducts] = useState([]) ;
    let [product,setProduct] = useState({}) ; // I can also do like a useState({}) -> this is an empty object.

    useEffect(()=>{
        let url = 'https://dummyjson.com/products' ; 
        fetch(url) 
        .then(res => res.json())
        .then(data => setAllProducts(data.products)); 
    },[productName])

    useEffect(()=>{
        let desiredProduct = Allproducts.find(p => p.title === productName) ;
        if(desiredProduct){
            setProduct(desiredProduct) ;
        }
        
        if(!desiredProduct){
             setProduct({ message:"Product not Found", name:productName }) ;       
        }

    },[Allproducts,productName])

    return [product,Allproducts];
}

export default useProductInfo ;