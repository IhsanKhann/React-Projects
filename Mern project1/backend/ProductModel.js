import mongoose from "mongoose";

// new must be used.
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
})

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;