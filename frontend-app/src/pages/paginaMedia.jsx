import React from "react";
import { withRouter } from "../utils";
import HeaderComponent from "../components/HeaderComponent";

class PaginaMedia extends React.Component {


  render = () => {
    
    return (
      <>
        <HeaderComponent />
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "50px"}}>
        <div style={{ border: "1px solid black", padding: "30px", borderRadius: "20px" }}>
            <a href="/admin/usuarios"><h2>ADMINISTRAR USUARIOS</h2></a>
        </div>
        <div style={{ border: "1px solid black", padding: "30px", borderRadius: "20px" }}>
            <a href="/admin/productos"><h2>ADMINISTRAR PRODUCTOS</h2></a>
        </div>
        </div>
      </>
    );
  };
}

export default PaginaMedia = withRouter(PaginaMedia);


