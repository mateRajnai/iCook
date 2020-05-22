import React, { useState } from "react";
export const UserContext = React.createContext();
export const UserProvider = (props) => {
  const [username, setUsername] = useState();
  const [roles, setRoles] = useState([]);
  const [id, setId] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        username,
        roles,
        id,
        setUsername,
        setRoles,
        setId,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
