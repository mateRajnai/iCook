import React from "react";
import { Row, Col } from "antd";

const NutritionalTableRow = (props) => {
  const nutrient = props.nutrient;
  const dailyNutrient = props.dailyNutrient;

  return (
    <Row gutter={16}>
      <Col span={10}>
        <h4>{nutrient.label}</h4>
      </Col>
      <Col span={7}>
        <span>
          {parseFloat(nutrient.quantity).toFixed(2)} {nutrient.unit}
        </span>
      </Col>
      <Col span={7}>
        <span>
          {parseFloat(dailyNutrient.quantity).toFixed(2)} {dailyNutrient.unit}
        </span>
      </Col>
    </Row>
  );
};

export default NutritionalTableRow;
