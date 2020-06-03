import React from "react";

export const NearbyStoresContext = React.createContext();

export const NearbyStoresProvider = (props) => {
  return (
    <NearbyStoresContext.Provider value={{}}>
      {props.children}
    </NearbyStoresContext.Provider>
  );
};
