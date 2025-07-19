import './Products.css' ;
export function ProductList({ Products, onClick }) {
  return (
    <ul>
      {Products.map((product) => (
        <li key={product.id}>
          <img src={product.imgSrc} alt={product.name} width="100" />
          <div className='text'>
            <h1>{product.name}</h1>
            <h3>Price: Rs {product.price}</h3>
          </div>
          <button onClick={() => onClick(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
}


export function CartList({ items }) {
  return (
    <div>
      <h2>Cart Items</h2>
      {items.map(item => (
        <div key={item.id}>
          <img src={item.imgSrc} alt={item.name} width="50" />
          <p>{item.name}</p>
          <p>Rs {item.price}</p>
        </div>
      ))}
    </div>
  );
}



// export {ProductList, CartList} ;