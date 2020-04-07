import React from "react";
import { Card, Row, Col } from "antd";

const RecipeListItem = (props) => {
  return (
    <Col span={24}>
      <Card title={props.recipe.label}>
        <Row>
          <Col span={4}>
            <img
              src={props.recipe.image}
              alt={props.recipe.label}
              height={100}
            ></img>
          </Col>
          <Col span={6}>
            Diet properties:
            <ul>
              {props.recipe.dietLabels.map((label) => (
                <li>{label}</li>
              ))}
            </ul>
          </Col>
          <Col span={6}>
            Health properties:
            <ul>
              {props.recipe.healthLabels.map((label) => (
                <li>{label}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card>
    </Col>

    // <div>
    //   <img src={props.recipe.image} alt={props.recipe.label}></img>
    //   <span>{props.recipe.label}</span>
    //   {props.recipe.dietLabels.map((label) => (
    //     <li>{label}</li>
    //   ))}
    //   {props.recipe.healthLabels.map((label) => (
    //     <li>{label}</li>
    //   ))}
    // </div>
  );
};

export default RecipeListItem;
