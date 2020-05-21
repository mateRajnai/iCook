import React, { useState } from "react";
export const UserContext = React.createContext();
export const UserProvider = (props) => {
  const [username, setUsername] = useState();
  const [roles, setRoles] = useState([]);
  const [id, setId] = useState();

  return (
    <UserContext.Provider
      value={{
        username,
        roles,
        id,
        setUsername,
        setRoles,
        setId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
