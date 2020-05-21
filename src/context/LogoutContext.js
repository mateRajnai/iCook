import React, { useContext } from "react";
import { useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "./UserContext";

const LOGOUT_URL = `http://localhost:8080/logout`;
const JWT_COOKIE = `jwt`;

export const LogoutContext = React.createContext();

export const LogoutProvider = (props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { setIsLoggedIn } = useContext(UserContext);

  const logout = (e) => {
    setConfirmLoading(true);
    console.log("logout clicked");
    Axios.get(LOGOUT_URL, {
      headers: {
        "Access-Control-Allow-Headers": "Authorization",
        Authorization: `Bearer ${Cookies.get(JWT_COOKIE)}`,
      },
    })
      .then((resp) => {
        console.log(resp.status);
        Cookies.remove(JWT_COOKIE);
        setIsLoggedIn(false);
      })
      .catch(() => {
        console.log("Error while logging out.");
      });
    setConfirmLoading(false);
  };

  return (
    <LogoutContext.Provider
      value={{
        logout,
        confirmLoading,
        setConfirmLoading,
      }}
    >
      {props.children}
    </LogoutContext.Provider>
  );
};
