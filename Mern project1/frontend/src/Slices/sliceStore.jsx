import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunks
export const deleteAsyncThunk = createAsyncThunk(
  'products/delete',
  async (id) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json(); // Ensure you're reading the body
    return { id }; // Return the id to filter it later
  }
);

export const updateAsyncThunk = createAsyncThunk(
  'products/update',
  async (product) => {
     console.log("thunk called in slice")
    const response = await fetch(`http://localhost:3000/api/products/${product._id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
    const data = await response.json(); // Should return updated product
    return data;
  }
);

// Initial State
const initialState = {
  products: [],
  loading: false,
  error: null
};

// Slice
const sliceStore = createSlice({
  name: "Store",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProducts: (state, action) => {
      state.products.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteAsyncThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      })
      .addCase(updateAsyncThunk.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
      });
  }
});

// Exports
export const { setProducts, addProducts } = sliceStore.actions;
export default sliceStore.reducer;
