import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '../Slices/sliceStore'; // Make sure this action exists
import "./AddProduct.css" ;

function AddProduct(id) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !price || !image || !category) {
      alert('All fields are required!');
      return;
    }

    const product = {
      title: title.toLowerCase(),
      description: description.toLowerCase(),
      price: parseFloat(price),
      image,
      category: category.toLowerCase(),
    };

    dispatch(addProducts(product));
    
    // we dont do this in the slice as it is aganist the rules, either use a thunk or do this a simple way.
    const addProduct = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
                });

                if (!response.ok) {
                throw new Error('Failed to add product');
                }

                const data = await response.json();
                console.log('Product added:', data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };
    addProduct();

    // Optional: Reset fields
    setTitle('');
    setDescription('');
    setPrice('');
    setImage('');
    setCategory('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </>
  );
}

export default AddProduct;
