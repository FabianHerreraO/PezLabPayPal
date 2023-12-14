import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [{ user, pass }, setForm] = useState({ user: null, pass: null });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if (!user){
      setError('Ingrese usuario')
    }
    if (!pass){
      setError('Ingrese password')
    }
    if (user && pass) {
      if (
        user === process.env.REACT_APP_USER &&
        pass === process.env.REACT_APP_PASS
      ) {
        localStorage.setItem("isAuth", true);
        navigate("/admin/paginamedia");
        setError("")
      } else {
        setError("usuario y password incorrecto")
      }

    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="container">
        <form onSubmit={onSubmit}>
          <h3>Iniciar sesión</h3>
          <div className="row">
            <div className="col col-8">
              <div className="form-group mt-4">
                <label htmlFor="type">
                  <h6>Usuario</h6>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="user"
                  id="use"
                  required
                  value={user}
                  onChange={(event) => {
                    setForm((form) => ({
                      ...form,
                      user: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="type">
                  <h6>Password</h6>
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={pass}
                  onChange={(event) => {
                    setForm((form) => ({
                      ...form,
                      pass: event.target.value,
                    }));
                  }}
                />
              </div>
              <button className="btn btn-primary mr-2 mt-3" type="submit">
                Enviar
              </button>
              <div style={{color: "red"}}>{error}</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}