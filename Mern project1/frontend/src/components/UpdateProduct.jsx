import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateAsyncThunk } from "../Slices/sliceStore";

function UpdateProduct(props) {
  const id = props.id;

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside update")

    if (!title || !description || !price || !image || !category) {
      alert('All fields are required!');
      return;
    }

    const product = {
      _id: id,
      title: title.toLowerCase(),
      description: description.toLowerCase(),
      price: parseFloat(price),
      image,
      category: category.toLowerCase(),
    };

    console.log("product to update", product)

    dispatch(updateAsyncThunk(product));
  };

  return (
    <>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button type="submit">Update Product</button>
    </form>
    </>
    
  );
}

export default UpdateProduct;
