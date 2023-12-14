import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./components/useAuth";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    const isAuth = useAuth(navigate);

    if (!isAuth) {
      return null;
    }

    return (
      <Component
        navigate={navigate}
        params={params}
        location={location}
        {...props}
      />
    );
  };

  return Wrapper;
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
