
import useJob from "../hooks/useJob";
function Main(){
    let Allproducts = useJob();
    let products = Allproducts.map(product =>
        <li key={product.id}> 
            <h2> {product.title} </h2>
            <p> {product.company} </p>
            <p> {product.location} </p>
            <p> {product.description} </p>
        </li>
    );

    return (
        products.length > 0 ? (
            <ul>
                {products}
            </ul>
        ) : (
            <h2>No Products Found</h2>
        )
    );
}

export default Main;