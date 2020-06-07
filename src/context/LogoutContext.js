import React, { useContext } from "react";
import { useState } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";
import { message } from "antd";

const LOGOUT_URL = `http://localhost:8080/logout`;

export const LogoutContext = React.createContext();

export const LogoutProvider = (props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { setIsLoggedIn } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    setConfirmLoading(true);
    Axios.post(LOGOUT_URL, null, {
      withCredentials: true,
    })
      .then((resp) => {
        message.success("Logout is successful.", 4);
        setIsLoggedIn(false);
        history.push("/");
        window.location.reload(true);
      })
      .catch(() => {
        message.error("Error occured during logout.", 4);
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
