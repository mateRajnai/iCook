import React, { useState } from "react";
export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [username, setUsername] = useState();
  const [roles, setRoles] = useState([]);

  return (
    <UserContext.Provider
      value={{
        username,
        roles,
        setUsername,
        setRoles,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
