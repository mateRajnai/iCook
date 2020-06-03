import React, { useState } from "react";
import { Button, Popconfirm, message } from "antd";

const GroceryStoreFinder = () => {
  const [isGeoLocRetrievalAllowed, setIsGeoLocRetrievalAllowed] = useState(
    false
  );

  const confirm = (e) => {
    console.log(e);
    message.success("You can search for grocery stores nearby from now on.");
    setIsGeoLocRetrievalAllowed(true);
  };

  const cancel = (e) => {
    console.log(e);
    message.error(
      "You can search for grocery stores after adding an address under the Profile page."
    );
  };

  return (
    <div>
      {!isGeoLocRetrievalAllowed ? (
        <React.Fragment>
          <Popconfirm
            title="iCook.com wants to use your device's location to find grocery stores nearby"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Allow"
            cancelText="Deny"
          >
            <Button>Allow geoloc</Button>
          </Popconfirm>
        </React.Fragment>
      ) : (
        <Button>Search for grocery stores nearby</Button>
      )}
    </div>
  );
};

export default GroceryStoreFinder;
