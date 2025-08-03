import ProductModel from "./ProductModel.js"

// make functions: addProducts, deleteProducts, getProducts, updateProducts.
const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json({
            status: true,
            message: "Products fetched successfully",
            data: products
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Error fetching products",
            error: err.message
        });
    }
}

const addProducts = async(req,res) => {
    try{
        const {title,description,price,image,category} = req.body;
        const newProduct = new ProductModel({title,description,price,image,category})
        await newProduct.save(); // ✅ This line actually saves it to the DB

        if(newProduct){
            res.status(200).json(
                {
                    status: true,
                    message: "New product added succesfully",
                }
            )
        }
        else{
            res.status(404).json({
                status: false,
                message: "Product couldnt be added successfully"
            })
        }
    }
    catch(err){
        res.status(500).json({
            status: false,
            message: "Error fetching products",
            error: err.message
        });
    }
}

const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });
        if (updatedProduct) {
            res.status(200).json({
                status: true,
                message: "Product updated successfully",
                data: updatedProduct
            });
        } else {
            res.status(404).json({
                status: false,
                message: "Product not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Error updating product",
            error: err.message
        });
    }
}

const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (deletedProduct) {
            res.status(200).json({
                status: true,
                message: "Product deleted successfully",
                data: deletedProduct
            });
        } else {
            res.status(404).json({
                status: false,
                message: "Product not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Error deleting product",
            error: err.message
        });
    }
}

export { getProducts, addProducts, updateProducts, deleteProducts };