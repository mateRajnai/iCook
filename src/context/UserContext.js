import React, { useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";

const LOGIN_URL = "http://localhost:8080/login";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [username, setUsername] = useState();
  const [roles, setRoles] = useState([]);

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
        console.log("Answer is arrived");
        setUsername(resp.username);
        setRoles(resp.roles);
        Cookies.set("jwt", resp.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        username,
        roles,
        login,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
