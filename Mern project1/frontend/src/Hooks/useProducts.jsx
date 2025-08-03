import { useEffect,useState } from "react"

// Custom hook that will use the api of the backend to get Products
function useProducts(){
    const [products,setProducts] = useState([])

    useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      console.log("Fetched data:", data);
      setProducts(data.data); // 👈 extract the array directly
    } catch (err) {
      console.error("Failed to fetch:", err);
    }
  };
  fetchProducts();
}, []);


    return {products};
}

export default useProducts;