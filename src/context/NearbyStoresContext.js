import React, { useState } from "react";

export const NearbyStoresContext = React.createContext();

export const NearbyStoresProvider = (props) => {
  const [isGeolocRetrievalAllowed, setIsGeolocRetrievalAllowed] = useState(
    false
  );
  const [geolocation, setGeolocation] = useState();

  const getGeolocation = () => {};

  return (
    <NearbyStoresContext.Provider
      value={{ isGeolocRetrievalAllowed, setIsGeolocRetrievalAllowed }}
    >
      {props.children}
    </NearbyStoresContext.Provider>
  );
};
