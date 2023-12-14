import { useEffect } from "react";

export function useAuth(navigate) {
  const isAuth = localStorage.getItem("isAuth") === "true";
  useEffect(() => {
    if (!isAuth) {
      navigate("/admin/login");
    }
  }, [isAuth, navigate]);
  return isAuth;
}
