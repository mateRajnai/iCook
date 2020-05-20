import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";

const SIGNUP_URL = "http://localhost:8080/signup";

export const SignupModalContext = React.createContext();

export const SignupModalProvider = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [action, setAction] = useState("");

  const { login } = useContext(UserContext);

  const signup = (data) => {
    Axios.post(SIGNUP_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        setConfirmLoading(false);
        setAction("");
        setVisible(false);
      })
      .catch(() => {
        setConfirmLoading(false);
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
