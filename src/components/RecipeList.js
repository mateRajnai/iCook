import React, { useContext } from "react";
import RecipeListItem from "./RecipeListItem";
import { RecipeContext } from "../context/RecipeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { Row, Layout } from "antd";

const { Content } = Layout;

const RecipeList = (props) => {
  const { recipes } = useContext(RecipeContext);
  const { loading } = useContext(RecipeContext);
  let content = null;

  if (loading) {
    content = (
      <Row justify="center" style={{ margin: "40px" }}>
        <FontAwesomeIcon
          icon={faHourglassHalf}
          spin
          size="8x"
        ></FontAwesomeIcon>
      </Row>
    );
  } else {
    content = (
      <Content>
        {recipes.map((recipe, index) => (
          <RecipeListItem key={index} recipe={recipe} />
        ))}
      </Content>
    );
  }
  return content;
};

export default RecipeList;
