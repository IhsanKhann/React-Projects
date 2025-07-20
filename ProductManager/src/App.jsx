import { useState } from 'react' 
import useProductInfo from './Hooks/ProductsData.js' ;
import { ProductList, Product } from './components/Products.jsx';
import './App.css'

function App() {
  let ProductNameToSearch = "Essence Mascara Lash Princess"; 
  let [productInfo, ListOfProducts] = useProductInfo(ProductNameToSearch);

  // let categoryToSearch = "bueaty"; // fix the typo here
  // let FilteredProducts = ListOfProducts.filter(product => product.category.toLowerCase() === categoryToSearch.toLowerCase()); 

  return (
    <>  
      <div className='Dashboard'>  
        <Product title={productInfo.title} description={productInfo.description} category={productInfo.category} price={productInfo.price} images={productInfo.images} />

        {ListOfProducts.length > 0 ? <ProductList items={ListOfProducts}/> : <h2>
          No Products found </h2>}
      </div>
    </>
  );
}

export default App;
