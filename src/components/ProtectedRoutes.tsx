import { ReactElement, ReactNode, useEffect, useState } from "react";
import { SessionLoader } from "./SessionLoader";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ProtectedRoutesType {
  children: ReactNode | ReactElement;
}

export const ProtectedRoutes = ({ children }: ProtectedRoutesType) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        const token = Cookies.get("_session");
        let response = await axios.get("/api/v1/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (
          response.status == 200 &&
          (response.data?.status || false) == true
        ) {
          setIsAuth(true);
          return;
        }
        console.log(response);
      } catch (error) {
        navigate("/login");
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return isAuth ? <> {children}</> : <SessionLoader />;
};
