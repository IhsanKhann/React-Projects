import { use, useState } from 'react'
import './App.css'
import { ProductList, CartList } from './components/Products.jsx';

function App() {
  let products = [
    { id: 1, name: 'Product 1', imgSrc: "/assets/image1.jpg", price: 1000 },
    { id: 2, name: 'Product 2', imgSrc: "/assets/image2.jpg", price: 2000 },
    { id: 3, name: 'Product 3', imgSrc: "/assets/image3.jpg", price: 3000 },
  ];

  let [cartItems, setCart] = useState([
    { id: 1, name: "Product 1", imgSrc: "/assets/image1.jpg", price: 1000 }
  ]);

  let [totalPrice, setTotalPrice] = useState(1000) ;

  const handleClick = (product) => {
    const cartItem = products.find(item => item.id === product.id);
    for(let i=0 ; i<cartItems.length ; i++){
      if(cartItem !== cartItems[i]){
        setCart([...cartItems, cartItem]);
      }
      setTotalPrice(totalPrice + cartItem.price) ;
    }
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <div>
        <ProductList Products={products} onClick={handleClick} />
      </div>

      <div className='cartSection'>
        <CartList items={cartItems} />

      { cartItems.length > 0 ? <h2>TotalPrice: {totalPrice}</h2> : 
      <h2> TotalPrice: {0} </h2>
      }
      </div>
      
    </>
  );
}

export default App;
