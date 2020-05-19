import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const SIGNUP_URL = "http://localhost:8080/signup";

export const SignupModalContext = React.createContext();

export const SignupModalProvider = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [action, setAction] = useState("");

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

  const showModal = (e) => {
    const action = e.target.dataset.name;
    setVisible(true);
    setAction(action);
  };

  const handleOk = (data) => {
    setConfirmLoading(true);
    signup(data);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  useEffect(() => {}, [visible]);

  return (
    <SignupModalContext.Provider
      value={{
        action,
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
