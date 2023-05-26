import { ReactElement, ReactNode, useEffect, useState } from "react";
import { SessionLoader } from "./SessionLoader";
import Cookies from "js-cookie";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LOGIN_PATH } from "../config/config";

export const PrivateRoutes = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, isAuthenticated } = useAuth();

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
          setIsAuthenticated && setIsAuthenticated(true);
          return;
        }
        console.log(response);
      } catch (error) {
        navigate(LOGIN_PATH);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return isAuthenticated ? (
    <>
      <Outlet />
    </>
  ) : (
    <SessionLoader />
  );
};
