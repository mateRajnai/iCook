import React, { useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";

const LOGIN_URL = "http://localhost:8080/login";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [username, setUsername] = useState();
  const [roles, setRoles] = useState([]);

  const login = (data) => {
    Axios.post(LOGIN_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      setUsername(data.username);
      setRoles(data.roles);
      Cookies.set("jwt", data.token);
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
