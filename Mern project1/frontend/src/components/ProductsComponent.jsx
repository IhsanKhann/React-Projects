import { useState, useEffect, useCallback } from "react";
import useProducts from "../Hooks/useProducts";
import "./products.css"; 
import { useSelector, useDispatch } from "react-redux";
import { setProducts, deleteAsyncThunk } from "../Slices/sliceStore";
import UpdateProduct from "./UpdateProduct.jsx";

function ProductComponent() {
  const { products } = useProducts();
  const dispatch = useDispatch();

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProducts = useCallback(() => {
    if (products.length > 0 && Array.isArray(products)) {
      dispatch(setProducts(products));
    } else {
      dispatch(setProducts([]));
    }
  }, [products]);

  useEffect(() => {
    handleProducts();
  }, [products]);

  const deleteProduct = (id) => {
    dispatch(deleteAsyncThunk(id));
  };

  const updateProducts = (id) => {
    setSelectedProductId(id);
    setShowUpdateForm(true);
  };

  return (
    <div className="product-page">
      <h1 className="heading">All Products</h1>

      {showUpdateForm && (
        <div className="update-form-container">
          <UpdateProduct id={selectedProductId} />
          <button onClick={() => setShowUpdateForm(false)}>Cancel Update</button>
        </div>
      )}

      <div className="product-container">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((item) => (
            <div key={item?._id} className="product-card">
              <img src={item?.image} alt="product" className="product-image" />
              <div className="product-info">
                <h2 className="product-title">{item?.title}</h2>
                <p className="product-description">{item?.description}</p>
              </div>
              <div className="product-footer">
                <p className="product-price">${item?.price}</p>
                <span className="product-category">{item?.category}</span>
              </div>

              <button className="delete-button" onClick={() => deleteProduct(item?._id)}>Delete</button>
              <button className="update-button" onClick={() => updateProducts(item?._id)}>Update</button>
            </div>
          ))
        ) : (
          <div className="no-products">No Products found.</div>
        )}
      </div>
    </div>
  );
}

export default ProductComponent;
