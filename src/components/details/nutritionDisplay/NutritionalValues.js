import React, { useContext, useState } from "react";
import { Row, Col, Button } from "antd";
import NutritionalTableRow, {
  NutritionalTableHeader,
} from "./NutritionalTableRow";
import styled from "styled-components";
import { SelectedRecipeContext } from "../../../context/SelectedRecipeContext";

const NUTRIENT_DATA = 1;

const NutritionalTable = styled.div`
  font-size: 15px;
  padding: 5px;
  #hide-button {
    margin-top: 20px;
  }
`;

const NutritionalValues = (props) => {
  const [isHidden, setHidden] = useState(true);
  const { selectedRecipe } = useContext(SelectedRecipeContext);
  const nutrients = Object.entries(selectedRecipe.totalNutrients);
  const dailyNutrients = Object.entries(selectedRecipe.totalDaily);

  const toggleVisibility = () => {
    setHidden(!isHidden);
  };

  const getDailyNutrient = (nutrient) => {
    const daily = dailyNutrients.find((daily) => daily[0] === nutrient[0]);
    return daily;
  };

  if (isHidden) {
    return (
      <Col>
        <Button onClick={toggleVisibility}>Show nutritional values</Button>
      </Col>
    );
  } else {
    return (
      <Col span={18}>
        <NutritionalTable>
          <Row justify="space-between">
            <Col span={11}>
              <NutritionalTableHeader></NutritionalTableHeader>
              {nutrients
                .slice(0, nutrients.length / 2)
                .map((nutrient, index) => (
                  <NutritionalTableRow
                    key={index}
                    nutrient={nutrient[NUTRIENT_DATA]}
                    dailyNutrient={getDailyNutrient(nutrient)}
                  ></NutritionalTableRow>
                ))}
            </Col>
            <Col span={11}>
              <NutritionalTableHeader></NutritionalTableHeader>
              {nutrients.slice(nutrients.length / 2).map((nutrient, index) => (
                <NutritionalTableRow
                  key={index}
                  nutrient={nutrient[NUTRIENT_DATA]}
                  dailyNutrient={getDailyNutrient(nutrient)}
                ></NutritionalTableRow>
              ))}
            </Col>
          </Row>
          <Row id="hide-button" justify="center">
            <Button onClick={toggleVisibility}>Hide nutritional values</Button>
          </Row>
        </NutritionalTable>
      </Col>
    );
  }
};

export default NutritionalValues;
