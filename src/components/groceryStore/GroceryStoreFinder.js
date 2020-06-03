import React from "react";
import { Button } from "antd";

const GroceryStoreFinder = () => {
  const display = () => {
    console.log("coordinates");
    console.log(window.geolocation);
  };

  return (
    <div>
      <Button onClick={display}>Search for grocery stores nearby</Button>
    </div>
  );
};

export default GroceryStoreFinder;
