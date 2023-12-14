import axios from "axios";

export default class ConnectionManager {
  baseRequest = axios.create({
    baseURL: `http://localhost:8080/api`,
  });

  getMovies = async () => {
    let response = await this.baseRequest.get("/productos");

    if (response.status !== 200) return null;
    return response.data;
  };

  getMovie = async (movieId) => {
    let response = await this.baseRequest.get(`/productos/${movieId}`);

    if (response.status !== 200) return null;
    return response.data;
  };

  createProducto = async (
    name,
    price,
    image,
    description,
    stock,
    size,
    color,
    type
  ) => {
    let response = await this.baseRequest.post(`/producto/create`, {
      name,
      price,
      image,
      description,
      stock,
      size,
      color,
      type,
    });

    if (response.status === 200 || response.status === 201)
      return response.data;
    return null;
  };

  editProducto = async (
    _id,
    name,
    price,
    image,
    description,
    stock,
    size,
    color,
    type
  ) => {
    let response = await this.baseRequest.put(`/producto/${_id}`, {
      name,
      price,
      image,
      description,
      stock,
      size,
      color,
      type,
    });

    if (response.status === 200 || response.status === 201)
      return response.data;
    return null;
  };

  deleteProducto = async (_id) => {
    let response = await this.baseRequest.delete(`/producto/${_id}`);
    console.log({ response });
    if (response.status === 200 || response.status === 201) return "ok";
    return null;
  };
}
