import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth") === "true";
  console.log({ isAuth });
  const logout = () => {
    localStorage.setItem("isAuth", false);
    navigate("/admin/login");
  };

  return (
    <div className="d-flex justify-content-between m-4 mb-5">
      <div className="col col-4" style={{ marginLeft: "20px" }}>
        <h2>Administrador</h2>
      </div>
      {isAuth ? (
        <button className="btn btn-danger" onClick={logout}>
          Salir
        </button>
      ) : null}
    </div>
  );
}
