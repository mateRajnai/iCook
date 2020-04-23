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
          <Row id="header">
            <Col>
              <h1>{randomDrink.strDrink}</h1>
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
                  <h4>Category:</h4> {randomDrink.strCategory} -{" "}
                  {randomDrink.strAlcoholic}
                </Col>
              </Row>
              <Row className="detail-row">
                <Col>
                  <h4>Suggested serving glass:</h4> {randomDrink.strGlass}
                </Col>
              </Row>
              <Row className="detail-row">
                <Col>
                  <h4>Ingredients:</h4>
                  <ul>
                    {randomDrink.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.ingredientName}:{" "}
                        {ingredient.measure === null ? "-" : ingredient.measure}
                      </li>
                    ))}
                  </ul>
                </Col>
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
