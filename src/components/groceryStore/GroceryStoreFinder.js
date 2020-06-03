import React, { useContext } from "react";
import { Button } from "antd";
import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Row, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const RowWithMargin = styled(Row)`
  margin: 40px;
`;

const GroceryStoreFinder = () => {
  const { isLoggedIn } = useContext(UserContext);
  const display = () => {
    console.log("coordinates");
    console.log(window.geolocation);
  };

  let content = null;

  if (isLoggedIn) {
    content = (
      <div>
        <Button onClick={display}>Search for grocery stores nearby</Button>
      </div>
    );
  } else {
    content = (
      <React.Fragment>
        <RowWithMargin justify="center">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            spin
            size="8x"
            style={{ color: "orange" }}
          ></FontAwesomeIcon>
        </RowWithMargin>
        <RowWithMargin justify="center">
          <Title level={4}>
            Please log in first to search for grocery stores nearby.
          </Title>
        </RowWithMargin>
      </React.Fragment>
    );
  }
  return content;
};

export default GroceryStoreFinder;
