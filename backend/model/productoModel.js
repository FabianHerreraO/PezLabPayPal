import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    type: { type: String, required: true },

});

const Producto= mongoose.model("producto", ProductoSchema); 
export default Producto;