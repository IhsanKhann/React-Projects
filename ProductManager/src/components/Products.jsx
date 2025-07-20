import "./ProductStyling.css" ;

export function ProductList({ items = [] }) {
    let Products = items.map((product) => (
        <li key={product.id}>
            <div className="title"> 
                   <h2>{product.title}</h2>
            </div>
         
            <div className="Text">
                <p>{product.description}</p>
                <h2>{product.category}</h2>
                <h2>{product.price}</h2>
            </div>
            
            <div className="images">
                <img src={product.images?.[0]} alt="image of Product" />
            </div>
            
        </li>
    ));

    return (
        <>
            <ul>
                {Products}
            </ul>
        </>
    );
}

export function Product({
    title = "Product",
    description,
    category = "null",
    price = "0.00",
    images
}) {
    return (
        <>
            <div className="Searched-Product">
                <div className="SP-text">
                    <h2> {title} </h2>
                    <p> {description} </p>
                    <h2> {category} </h2>
                    <h2> {price} </h2>
                </div>
               
                <div className="SP-image"> 
                    <img src={images?.[0]} alt="Product image" />
                </div>
               
            </div>
        </>
    );
}