import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const NUTRIENT_DATA = 1;

const NutritionInfo = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.secondaryColor};
  margin: 0 0 7px;
  h4 {
    margin: 0;
  }
`;

const NutritionalTableRow = (props) => {
  const nutrient = props.nutrient;
  let dailyNutrient;
  if (props.dailyNutrient === undefined) {
    dailyNutrient = "-";
  } else {
    console.log(props.dailyNutrient[NUTRIENT_DATA]);
    dailyNutrient = parseFloat(props.dailyNutrient[NUTRIENT_DATA].quantity)
      .toFixed(4)
      .concat(" ", props.dailyNutrient[NUTRIENT_DATA].unit);
  }

  return (
    <NutritionInfo>
      <Row gutter={16}>
        <Col span={10}>
          <h4>{nutrient.label}</h4>
        </Col>
        <Col span={7}>
          <span>
            {parseFloat(nutrient.quantity).toFixed(4)} {nutrient.unit}
          </span>
        </Col>
        <Col span={7}>
          <span>{dailyNutrient}</span>
        </Col>
      </Row>
    </NutritionInfo>
  );
};

export const NutritionalTableHeader = () => {
  return (
    <Row gutter={16}>
      <Col span={10}>
        <h4>Nutrient</h4>
      </Col>
      <Col span={7}>
        <span>Amount</span>
      </Col>
      <Col span={7}>Daily ref.</Col>
    </Row>
  );
};

export default NutritionalTableRow;
