import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { withRouter } from "../utils";
import SweetAlert from "react-bootstrap-sweetalert";
import ConnectionManager from "../ConnectionManager";

class CreateUsuarioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      user:"",
      password:"",
      name:"",
      error: "",
      success: "",
    };
  }

  createUsuario = async () => {
    const { user, password, name} =
      this.state;
    let error = "";

    if (!user.trim()) {
      error = "User name is required";
    }

    if (!name.trim()) {
        error = "Name is required";
      }

    if (!password.trim()) {
        error = "Password is required";
      }

    if (error !== "") {
      this.setState({
        error: error,
      });
    } else {
      let connection = new ConnectionManager();
      let data = await connection.createUsuario(
        user,
        password,
        name,        
      );

      if (data !== null)
        this.setState({
            _id: null,
            user:"",
            password:"",
            name:"",
            error: "",
            success: "You have been register successfully",
        });
      else
        this.setState({
          error: "Error",
        });
    }
  };

  editUsuario = async () => {
    const { _id, user, password, name} =
      this.state;
    let error = "";

    if (!user.trim()) {
      error = "User is required";
    }

    if (!password.trim()) {
        error = "Password is required";
      }

    if (error !== "") {
      this.setState({
        error: error,
      });
    } else {
      let connection = new ConnectionManager();
      let data = await connection.editUsuario(
        _id,
        user,
        password,
        name
      );

      if (data !== null)
        this.setState({
        user:"",
        password:"",
        name:"",
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
  goToUsuarios = () => {
    this.props.navigate("/admin/usuarios");
  };

  async componentDidMount() {
    if (this.props.params.usuarioId) {
      let connection = new ConnectionManager();
      let response = await connection.getUsuario(this.props.params.usuarioId);
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
              this.props.navigate("/admin/usuario/create");
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
                    {this.state._id ? "Editar Usuario" : "Crear Usuario"}
                  </h3>
                </div>
                <div className="col col-2">
                  <button
                    className="btn btn-success"
                    onClick={this.goToUsuarios}
                  >
                    Ver usuarios
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col col-8">
                  <div className="form-group mt-4">
                    <label htmlFor="user">
                      <h6>User</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="user"
                      id="user"
                      required
                      value={this.state.user}
                      onChange={(event) => {
                        this.setState({
                          user: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="password">
                      <h6>Password</h6>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="password"
                      id="password"
                      required
                      value={this.state.password}
                      onChange={(event) => {
                        this.setState({
                          password: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="name">
                      <h6>Name</h6>
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
                  <button
                    className="btn btn-primary mr-2 mt-3"
                    onClick={
                      this.state._id ? this.editUsuario : this.createUsuario
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

export default CreateUsuarioPage = withRouter(CreateUsuarioPage);
