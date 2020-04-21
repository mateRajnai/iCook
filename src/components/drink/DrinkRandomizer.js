import React, { useContext } from "react";
import { Row, Col } from "antd";
import { DrinkContext } from "../../context/DrinkContext";
import DrinkDetails from "./DrinkDetails";

const DrinkRandomizer = (props) => {
  const { getRandomDrink } = useContext(DrinkContext);

  return (
    <Row justify="center">
      <Col id="container" span={16}>
        <Row id="randomizer" justify="center">
          <Col>
            <button onClick={getRandomDrink}>Randomize</button>
          </Col>
        </Row>
        <Row id="drink-details">
          <DrinkDetails></DrinkDetails>
        </Row>
      </Col>
    </Row>
  );
};

export default DrinkRandomizer;
