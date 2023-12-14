import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { withRouter } from "../../utils";
import SweetAlert from "react-bootstrap-sweetalert";
import ConnectionManager from "../../ConnectionManager";

class CreateProductoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      name: "",
      price: 0,
      image: "",
      description: "",
      stock: 0,
      size: "",
      color: "",
      type: "",
      error: "",
      success: "",
    };
  }

  createProducto = async () => {
    const { name, price, image, description, stock, size, color, type } =
      this.state;
    let error = "";

    if (!name.trim()) {
      error = "Producto name is required";
    }

    if (!Number(price) > 0) {
      error = "Price is required";
    }

    if (error !== "") {
      this.setState({
        error: error,
      });
    } else {
      let connection = new ConnectionManager();
      let data = await connection.createProducto(
        name,
        price,
        image,
        description,
        stock,
        size,
        color,
        type
      );

      if (data !== null)
        this.setState({
          name: "",
          price: 0,
          image: "",
          description: "",
          stock: 0,
          size: "",
          color: "",
          type: "",
          error: "",
          success: "You have been register successfully",
        });
      else
        this.setState({
          error: "Error",
        });
    }
  };

  editProducto = async () => {
    const { _id, name, price, image, description, stock, size, color, type } =
      this.state;
    let error = "";

    if (!name.trim()) {
      error = "Producto name is required";
    }

    if (!Number(price) > 0) {
      error = "Price is required";
    }

    if (error !== "") {
      this.setState({
        error: error,
      });
    } else {
      let connection = new ConnectionManager();
      let data = await connection.editProducto(
        _id,
        name,
        price,
        image,
        description,
        stock,
        size,
        color,
        type
      );

      if (data !== null)
        this.setState({
          name: "",
          price: 0,
          image: "",
          description: "",
          stock: 0,
          size: "",
          color: "",
          type: "",
          error: "",
          success: "You have been register successfully",
        });
      else
        this.setState({
          error: "Error",
        });
    }
  };

  onCloseModal = () => {
    this.setState({
      error: "",
      success: "",
    });
  };
  goToProducts = () => {
    this.props.navigate("/admin/productos");
  };

  async componentDidMount() {
    if (this.props.params.productId) {
      let connection = new ConnectionManager();
      let response = await connection.getMovie(this.props.params.productId);
      if (response) {
        this.setState({ status: "", error: "", ...response });
      } else {
        this.setState({
          status: "error",
          error: "There ahs been an error in the connection to the server",
        });
      }
    }
  }

  render() {
    return (
      <>
        {this.state.error !== "" ? (
          <SweetAlert title={"Error"} danger onConfirm={this.onCloseModal}>
            {this.state.error}
          </SweetAlert>
        ) : null}
        {this.state.success !== "" ? (
          <SweetAlert
            title={"Success"}
            success
            onConfirm={() => {
              this.onCloseModal();
              this.props.navigate("/admin/productos");
            }}
          >
            {this.state.success}
          </SweetAlert>
        ) : null}
        <HeaderComponent />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row justify-content-between">
                <div className="col col-4">
                  <h3>
                    {this.state._id ? "Editar Producto" : "Crear Producto"}
                  </h3>
                </div>
                <div className="col col-2">
                  <button
                    className="btn btn-success"
                    onClick={this.goToProducts}
                  >
                    Ver productos
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col col-8">
                  <div className="form-group mt-4">
                    <label htmlFor="name">
                      <h6>Nombre</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={this.state.name}
                      onChange={(event) => {
                        this.setState({
                          name: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="price">
                      <h6>Precio</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="price"
                      id="price"
                      required
                      value={this.state.price}
                      onChange={(event) => {
                        this.setState({
                          price: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="image">
                      <h6>URL de la imagen</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="image"
                      id="image"
                      required
                      value={this.state.image}
                      onChange={(event) => {
                        this.setState({
                          image: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="description">
                      <h6>Descripción</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="description"
                      id="description"
                      required
                      value={this.state.description}
                      onChange={(event) => {
                        this.setState({
                          description: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="stock">
                      <h6>Stock</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="stock"
                      id="stock"
                      required
                      value={this.state.stock}
                      onChange={(event) => {
                        this.setState({
                          stock: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="size">
                      <h6>Tamaño</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="size"
                      id="size"
                      required
                      value={this.state.size}
                      onChange={(event) => {
                        this.setState({
                          size: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="color">
                      <h6>Color</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="color"
                      id="color"
                      required
                      value={this.state.color}
                      onChange={(event) => {
                        this.setState({
                          color: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="type">
                      <h6>Tipo</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="type"
                      id="type"
                      required
                      value={this.state.type}
                      onChange={(event) => {
                        this.setState({
                          type: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-primary mr-2 mt-3"
                    onClick={
                      this.state._id ? this.editProducto : this.createProducto
                    }
                  >
                    {this.state._id ? "Editar" : "Crear"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateProductoPage = withRouter(CreateProductoPage);
