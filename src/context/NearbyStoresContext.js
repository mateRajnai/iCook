import React from "react";

export const NearbyStoresContext = React.createContext();

export const NearbyStoresProvider = (props) => {
  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(savePosition);
    } else {
      // TODO: ant design notification
      alert("Geolocation is not supported by this browser.");
    }
  };

  const savePosition = (position) => {
    window.geolocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  };

  return (
    <NearbyStoresContext.Provider
      value={{
        getGeolocation,
      }}
    >
      {props.children}
    </NearbyStoresContext.Provider>
  );
};
