import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";
import Cookies from "js-cookie";

const LOGIN_URL = "http://localhost:8080/login";
const SIGNUP_URL = "http://localhost:8080/signup";

export const SignupModalContext = React.createContext();

export const SignupModalProvider = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [action, setAction] = useState("");

  const { setUsername } = useContext(UserContext);
  const { setRoles } = useContext(UserContext);

  const signup = (data) => {
    Axios.post(SIGNUP_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        setVisible(false);
        setConfirmLoading(false);
      })
      .catch(() => {
        setConfirmLoading(false);
      });
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
    })
      .then((resp) => {
        setUsername(resp.username);
        setRoles(resp.roles);
        Cookies.set("jwt", resp.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const showModal = async (e) => {
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
    if (action !== "") {
      setVisible(true);
    }
  }, [action, visible]);

  return (
    <SignupModalContext.Provider
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
      }}
    >
      {props.children}
    </SignupModalContext.Provider>
  );
};
