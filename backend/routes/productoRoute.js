import express from "express";
import * as productController from "../controllers/productoController.js"

const router = express.Router();

router.post("/api/producto/create", productController.createProducto);
router.get("/api/productos", productController.getProductos);
router.get("/api/productos/:idProducto", productController.getProducto);
router.delete("/api/producto/:idProducto", productController.deleteProducto);
router.put("/api/producto/:idProducto", productController.updateProducto);

export {router};
