import Producto from "../model/productoModel.js";

const createProducto = async (req, res) => {
  var newProducto = await Producto.create(req.body);
  res.status(201).json(newProducto);
};

const getProductos = async (req, res) => {
  var listProductos = await Producto.find();
  res.status(200).json(listProductos);
};

const getProducto = async (req, res) => {
  var id = req.params.idProducto;
  var producto = await Producto.findById(id);
  res.status(200).json(producto);
};

const deleteProducto = async (req, res) => {
  var id = req.params.idProducto;
  await Producto.findByIdAndDelete(id);
  res.status(200).json();
};

const updateProducto = async (req, res) => {
  var idProducto = req.params.idProducto;
  var dataUpdate = req.body;
  console.log({ idProducto, dataUpdate });

  await Producto.findByIdAndUpdate(idProducto, dataUpdate);
  res.status(200).json();
};

export {
  createProducto,
  getProducto,
  deleteProducto,
  getProductos,
  updateProducto,
};
