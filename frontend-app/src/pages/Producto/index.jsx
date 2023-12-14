import React from "react";
import TableComponent from "../../components/TableComponent";
import { withRouter } from "../../utils";
import ConnectionManager from "../../ConnectionManager";
import SweetAlert from "react-bootstrap-sweetalert";
import HeaderComponent from "../../components/HeaderComponent";

class MovieIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: "",
      success: "",
    };
  }

  createMovie = () => {
    this.props.navigate("/admin/producto/create/");
  };

  editProduct = (movieId) => {
    this.props.navigate(`/admin/producto/edit/${movieId}`);
  };

  deleteProduct = async (movieId) => {
    let connection = new ConnectionManager();
    const isOk = await connection.deleteProducto(movieId);
    if (isOk) {
      let newData = this.state.data.filter((d) => d._id !== movieId);
      this.setState({
        error: "",
        success: "Producto Eliminado",
        data: newData,
      });
    }
  };

  async componentDidMount() {
    let connection = new ConnectionManager();
    let response = await connection.getMovies();
    if (response) {
      this.setState({ error: "", success: "", data: response });
    } else {
      this.setState({
        data: [],
        success: "",
        error: "There ahs been an error in the connection to the server",
      });
    }
  }

  onCloseModal = () => {
    this.setState({
      error: "",
      success: "",
    });
  };

  render = () => {
    let proccessData = this.state.data;

    return (
      <>
        <HeaderComponent />
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
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row justify-content-between">
                <div className="col col-4">
                  <h2 className="mb-5">Productos</h2>
                </div>
                <div className="col col-1">
                  <button
                    className="btn btn-success"
                    onClick={this.createMovie}
                  >
                    Crear
                  </button>
                </div>
              </div>
              <div className="row">
                <TableComponent
                  keys={["name", "stock"]}
                  data={proccessData}
                  actions={["Editar", "Eliminar"]}
                  actionsHandler={[this.editProduct, this.deleteProduct]}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default MovieIndexPage = withRouter(MovieIndexPage);
