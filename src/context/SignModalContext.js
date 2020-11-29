import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";
import { message } from "antd";

const LOGIN_URL = "https://icoook-api-server.herokuapp.com/login";
const SIGNUP_URL = "https://icoook-api-server.herokuapp.com/signup";

export const SignModalContext = React.createContext();

export const SignModalProvider = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [action, setAction] = useState("");

  const { setId, setUsername, setRoles, setIsLoggedIn } = useContext(
    UserContext
  );

  const signup = (data) => {
    Axios.post(SIGNUP_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((resp) => {
        setUsername(resp.data.username);
        setRoles(resp.data.roles);
        setId(resp.data.id);
        setConfirmLoading(false);
        setAction("");
        setVisible(false);
        setIsLoggedIn(true);
        message.success("Registration is successful. You are logged in.", 4);
      })
      .catch(() => {
        setConfirmLoading(false);
        message.error("Error occurred during registration.", 4);
      });
  };

  const checkUniqueField = (data, endpoint) => {
    return Axios.post(SIGNUP_URL + endpoint, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }).then((resp) => resp.data);
  };

  const login = (inputs) => {
    const data = {
      username: inputs.username_login,
      password: inputs.password_login,
    };
    Axios.post(LOGIN_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((resp) => {
        setUsername(resp.data.username);
        setRoles(resp.data.roles);
        setId(resp.data.id);
        setAction("");
        setVisible(false);
        setConfirmLoading(false);
        setIsLoggedIn(true);
        message.success("Login is successful.", 4);
      })
      .catch(function () {
        setConfirmLoading(false);
        message.error("Error occurred during login.", 4);
      });
  };

  const showModal = (e) => {
    const action = e.target.dataset.name;
    setAction(action);
  };

  const handleOk = (data) => {
    setConfirmLoading(true);
    if (action === "signup") {
      signup(data);
    } else {
      login(data);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
    setAction("");
  };

  useEffect(() => {
    if (action !== "" && !confirmLoading) {
      setVisible(true);
    }
  }, [action, confirmLoading, visible]);

  return (
    <SignModalContext.Provider
      value={{
        action,
        setAction,
        visible,
        setVisible,
        confirmLoading,
        setConfirmLoading,
        showModal,
        handleOk,
        handleCancel,
        checkUniqueField,
      }}
    >
      {props.children}
    </SignModalContext.Provider>
  );
};
