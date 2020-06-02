import React, { useContext, useState } from "react";
import { Row, Col, Button } from "antd";
import NutritionalTableRow, {
  NutritionalTableHeader,
} from "./NutritionalTableRow";
import styled from "styled-components";
import { SelectedRecipeContext } from "../../../context/SelectedRecipeContext";
import { UserContext } from "../../../context/UserContext";
import { notification } from "antd";

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
  const { isLoggedIn } = useContext(UserContext);

  const toggleVisibility = () => {
    if (isLoggedIn) {
      setHidden(!isHidden);
    } else {
      notification.open({
        message: "Please sign in!",
        description: "Guests are not allowed to see nutrition values!",
        placement: "topRight",
        top: 50,
      });
    }
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
