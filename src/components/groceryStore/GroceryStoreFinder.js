import React, { useContext, useEffect } from "react";
import { Button } from "antd";
import { NearbyStoresContext } from "../../context/NearbyStoresContext";

const GroceryStoreFinder = () => {
  const { latitude, longitude } = useContext(NearbyStoresContext);

  const display = () => {
    console.log("coordinates");
    console.log(window.geolocation);
  };

  useEffect(() => {}, [latitude, longitude]);

  return (
    <div>
      <Button onClick={display}>Search for grocery stores nearby</Button>
    </div>
  );
};

export default GroceryStoreFinder;
