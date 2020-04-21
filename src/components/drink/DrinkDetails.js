import React, { useContext } from "react";
import { DrinkContext } from "../../context/DrinkContext";
import { Row, Col } from "antd";
import styled from "styled-components";

const DrinkDisplay = styled.div`
  .detail-row {
    margin-bottom: 10px;
  }
`;

const DrinkDetails = (props) => {
  const { randomDrink } = useContext(DrinkContext);

  if (randomDrink === null) {
    return null;
  } else {
    return (
      <Col span={24}>
        <DrinkDisplay>
          <Row>
            <Col>
              <h2>{randomDrink.strDrink}</h2>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={8}>
              <img
                src={randomDrink.strDrinkThumb}
                alt={randomDrink.strDrink}
                width="302px"
              ></img>
            </Col>
            <Col span={8}>
              <Row className="detail-row">
                <Col>
                  Category: {randomDrink.strCategory} -{" "}
                  {randomDrink.strAlcoholic}
                </Col>
              </Row>
              <Row className="detail-row">
                <Col>Suggested serving glass: {randomDrink.strGlass}</Col>
              </Row>
              <Row className="detail-row">
                <Col>Ingredients</Col>
              </Row>
              <Row className="detail-row">
                <Col>
                  <h4>Instructions:</h4>
                  <p>{randomDrink.strInstructions}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </DrinkDisplay>
      </Col>
    );
  }
};

export default DrinkDetails;
