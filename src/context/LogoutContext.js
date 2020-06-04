import React, { useContext } from "react";
import { useState } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";
import { message } from "antd";

const LOGOUT_URL = `https://icook-api-server.herokuapp.com/logout`;

export const LogoutContext = React.createContext();

export const LogoutProvider = (props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { setIsLoggedIn } = useContext(UserContext);
  const history = useHistory();

  const logout = (data) => {
    setConfirmLoading(true);
    console.log("logout clicked");
    Axios.post(LOGOUT_URL, data, {
      withCredentials: true,
    })
      .then((resp) => {
        console.log(resp.status);
        setIsLoggedIn(false);
        history.push("/");
        window.location.reload(true);
        message.success("Logout is successful.", 4);
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
