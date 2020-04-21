import React, { useContext, useState } from "react";
import { Row, Col } from "antd";
import { RecipeContext } from "../../../context/RecipeContext";
import NutritionalTableRow from "./NutritionalTableRow";

const NUTRIENT_DATA = 1;

const NutritionalValues = (props) => {
  const [isHidden, setHidden] = useState(true);
  const { selectedRecipe } = useContext(RecipeContext);
  const nutrients = Object.entries(selectedRecipe.totalNutrients);
  const dailyNutrients = Object.entries(selectedRecipe.totalDaily);

  const toggleVisibility = () => {
    setHidden(!isHidden);
  };

  if (isHidden) {
    return (
      <Col>
        <button onClick={toggleVisibility}>Show nutritional values</button>
      </Col>
    );
  } else {
    return (
      <Col span={18}>
        <Row>
          <Col span={12}>
            {nutrients.slice(0, nutrients.length / 2).map((nutrient, index) => (
              <NutritionalTableRow
                key={index}
                nutrient={nutrient[NUTRIENT_DATA]}
                dailyNutrient={dailyNutrients[index][NUTRIENT_DATA]}
              ></NutritionalTableRow>
            ))}
          </Col>
          <Col span={12}>
            {nutrients.slice(nutrients.length / 2).map((nutrient, index) => (
              <NutritionalTableRow
                key={index}
                nutrient={nutrient[NUTRIENT_DATA]}
                dailyNutrient={dailyNutrients[index][NUTRIENT_DATA]}
              ></NutritionalTableRow>
            ))}
          </Col>
        </Row>
        <Row justify="center">
          <button onClick={toggleVisibility}>Hide nutritional values</button>
        </Row>
      </Col>
    );
  }
};

export default NutritionalValues;
