import React, { useContext } from "react";
import { Row, Col } from "antd";
import { DrinkContext } from "../../context/DrinkContext";
import DrinkDetails from "./DrinkDetails";
import DetailedPage from "../../style/DetailedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Randomizer = styled.div`
  #randomizer {
    padding: 0 0 20px;
  }

  #dice:hover {
    cursor: pointer;
    color: ${(props) => props.theme.secondaryColor};
    transition: 0.5s;
  }
`;

const DrinkRandomizer = (props) => {
  const { randomDrink, getRandomDrink } = useContext(DrinkContext);

  return (
    <Row justify="center">
      <Col span={16}>
        <Randomizer>
          <DetailedPage>
            <Row id="randomizer" justify="center">
              <Col>
                <FontAwesomeIcon
                  id="dice"
                  icon={faDiceFive}
                  size="5x"
                  onClick={getRandomDrink}
                ></FontAwesomeIcon>
              </Col>
            </Row>
            <div id="container" hidden={randomDrink === null}>
              <Row id="drink-details">
                <DrinkDetails></DrinkDetails>
              </Row>
            </div>
          </DetailedPage>
        </Randomizer>
      </Col>
    </Row>
  );
};

export default DrinkRandomizer;
